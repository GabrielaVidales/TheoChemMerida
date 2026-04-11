import { Separator } from '@/components/ui/separator'
import { useUI } from '@/contexts/use-scroll-button'
import type { People } from '@/data/people'
import { cn } from '@/lib/utils'
import { Image } from 'lucide-react'
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

type ProfileGalleryProps = {
    memberName: People['name']
    gallery: People['gallery']
}

function ProfileGallery({ memberName, gallery }: ProfileGalleryProps) {
    const { setTopButtonDisabled } = useUI()

    return (
        <PhotoProvider
            speed={() => 300}
            maskOpacity={0.8}
            photoClassName="object-contain w-auto h-auto max-w-full"
            loadingElement={<div className="animate-pulse bg-neutral-200 w-full h-full" />}
            onVisibleChange={setTopButtonDisabled}
            toolbarRender={({ }) => {
                return (
                    <p className='text-sm sm:text-base justify-self-start'>
                        {memberName}
                    </p>
                )
            }}
            overlayRender={({ index }) => {
                const image = gallery[index]
                return (
                    <div className={cn(
                        "absolute bottom-0 left-0 w-full p-6 z-10",
                        "bg-black/50 text-white",
                        "space-y-2"
                    )}>
                        {image && (
                            <div className='max-w-4xl mx-auto'>
                                {image.caption.map((item) => (
                                    <p className={cn(
                                        "text-sm mb-2",
                                    )}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                )
            }}
        >
            <div className="grid grid-cols-2 gap-2">
                {gallery?.map((data, idx) => (
                    <PhotoView key={idx} src={data.img}>
                        <div className={
                            cn(
                                'cursor-pointer aspect-square w-full overflow-hidden rounded-sm border bg-neutral-100',
                                'transition-transform hover:scale-105 duration-200'
                            )
                        }>
                            <img
                                src={data.img}
                                alt={data.caption[0]}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </PhotoView>
                ))}
                {gallery.length % 2 !== 0 && (
                    <div className={
                        cn(
                            'aspect-square w-full overflow-hidden rounded-sm border bg-neutral-100',
                        )
                    }>
                        <div className="h-full w-full object-cover flex justify-center items-center">
                            <Image className='size-20 text-neutral-300' />
                        </div>
                    </div>
                )}
            </div>
        </PhotoProvider>
    )
}

export default ProfileGallery