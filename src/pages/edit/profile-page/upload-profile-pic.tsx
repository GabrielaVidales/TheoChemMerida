import React, { useRef, useState, type HTMLAttributes } from 'react'
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldContent, FieldError, FieldTitle } from '@/components/ui/field';
import { centerCrop, makeAspectCrop, ReactCrop, type Crop, type PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';
import { Image, Save, Trash2 } from 'lucide-react';
import { UploadFile } from '@/components/upload-file';
import { Input } from '@/components/ui/input';


export function UserPictureForm() {

    const { handleSubmit, clearErrors, setError, reset, control, formState: { isValid, isSubmitting } } = useForm({
        defaultValues: {
            photo: null,
        }
    })

    const [open, setOpen] = useState(false)

    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const imgRef = useRef<HTMLImageElement>(null);

    const onFormSubmit = handleSubmit(async (data) => {

    })

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className='space-y-5' disabled={isSubmitting}>
                <Controller
                    name='photo'
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldTitle>Upload or change your profile photo</FieldTitle>
                            <FieldContent className='flex flex-col sm:flex-row justify-center items-center gap-2'>
                                <ImagePreview file={field.value as File} className='size-40' />
                                <UploadFile
                                    className='flex-1 h-40 w-40'
                                    maxSize={1048576 * 10}
                                    onChange={(e) => {
                                        const reader = new FileReader();
                                        reader.onload = () => {
                                            clearErrors('photo')
                                            setImgSrc(reader.result?.toString() || '')
                                            setOpen(true)
                                        }
                                        reader.readAsDataURL(e[0]);
                                    }}
                                    onRejected={errors => {
                                        errors[0].errors.map(error => {
                                            setError('photo', {
                                                type: 'custom',
                                                message: error.message
                                            })
                                        })
                                    }}
                                />
                            </FieldContent>
                            {field.value && (
                                <FieldContent className='flex w-full items-center justify-center text-center gap-4 py-2'>
                                    <div className='flex flex-col items-center flex-1'>
                                        <span className='font-semibold text-sm'>Uploaded picture</span>
                                        <ImagePreview file={field.value as File} className='w-40' />
                                        <Button variant='link' type='button' onClick={() => field.onChange(null)} className='text-destructive'>
                                            <Trash2 data-icon='inline-start' />
                                            Remove
                                        </Button>
                                    </div>
                                </FieldContent>
                            )}
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            <Dialog open={open} onOpenChange={setOpen}>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Crop Your Photo</DialogTitle>
                                        <DialogDescription>Drag and scale to fit your face within the square</DialogDescription>
                                        <DialogDescription asChild>
                                            <div className='space-y-5'>
                                                <div className="relative flex items-center justify-center bg-gray-300 rounded-md border-2 border-gray-500 overflow-hidden">
                                                    <ReactCrop
                                                        crop={crop}
                                                        onChange={(c) => setCrop(c)}
                                                        onComplete={(c) => setCompletedCrop(c)}
                                                        aspect={1}
                                                        className='max-h-90 flex items-center justify-center'
                                                    >
                                                        <img
                                                            ref={imgRef}
                                                            src={imgSrc}
                                                            className="max-h-40 w-auto object-contain"
                                                            onLoad={(e) => {
                                                                const { width, height } = e.currentTarget;
                                                                setCrop(centerCrop(makeAspectCrop({ unit: '%', width: 90 }, 1, width, height), width, height));
                                                            }}
                                                        />
                                                    </ReactCrop>
                                                </div>

                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </DialogClose>
                                        <Button className='' onClick={async () => {
                                            if (!imgRef.current || !completedCrop) return;

                                            const canvas = document.createElement('canvas');
                                            canvas.width = completedCrop.width;
                                            canvas.height = completedCrop.height;
                                            const ctx = canvas.getContext('2d');

                                            const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
                                            const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

                                            if (ctx) {
                                                ctx.imageSmoothingEnabled = true
                                                ctx.imageSmoothingQuality = 'high'
                                                ctx.drawImage(
                                                    imgRef.current,
                                                    completedCrop.x * scaleX,
                                                    completedCrop.y * scaleY,
                                                    completedCrop.width * scaleX,
                                                    completedCrop.height * scaleY,
                                                    0, 0, completedCrop.width, completedCrop.height
                                                );

                                                canvas.toBlob((blob) => {
                                                    if (blob) {
                                                        const file = new File([blob], 'cropped.webp', { type: 'image/webp' });
                                                        field.onChange(file);
                                                        setOpen(false)
                                                    }
                                                }, 'image/webp');
                                            }
                                        }}>
                                            Crop image
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </Field>
                    )}
                />
                <div className='flex justify-end'>
                    <Button type='submit' className='p-5 w-60 uppercase' disabled={!isValid}>
                        {isSubmitting ? (
                            <Spinner data-icon="inline-start" />
                        ) : (
                            <Save data-icon="inline-start" />
                        )}
                        Save changes
                    </Button>
                </div>
            </fieldset>
        </form>
    )
}

const ImagePreview = ({ file, className }: { file?: File } & HTMLAttributes<HTMLDivElement>) => {
    const [previewURL, setPreviewURL] = React.useState('')
    React.useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file)
            setPreviewURL(url)
        } else {
            setPreviewURL('')
        }
        return () => {
            if (previewURL) {
                URL.revokeObjectURL(previewURL)
            }
        }
    }, [file])

    return (<>
        {previewURL ? (
            <img
                src={previewURL}
                alt="Previsualización de imagen"
                className={cn('bg-white aspect-square object-cover border-2 border-foreground/50 rounded-lg overflow-hidden', className)}
            />
        ) : (
            <div className={cn(
                'relative aspect-square rounded-xl overflow-hidden select-none',
                'bg-neutral-50 border-2 border-neutral-200',
                'flex flex-col items-center justify-center gap-2',
                'transition-colors duration-200 hover:bg-neutral-100 hover:border-neutral-300',
                className
            )}>
                <div className="p-4 rounded-full bg-white shadow-sm ring-1 ring-neutral-200/50">
                    <Image className='text-neutral-400 size-10 stroke-[1.5]' />
                </div>

                <div className="flex flex-col items-center">
                    <span className='text-neutral-500 font-medium text-sm'>No photo selected</span>
                    <span className='text-neutral-400 text-xs'>JPG, PNG or WebP</span>
                </div>
            </div>
        )}
    </>)
}