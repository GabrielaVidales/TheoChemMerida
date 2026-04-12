import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { profileSchema, type ProfileValues } from "@/data/edit-profile-form"
import { countWords } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Plus, X } from "lucide-react"
import { UserPictureForm } from "./upload-profile-pic"

type EditProfileProps = {}

function EditProfilePage({ }: EditProfileProps) {
    const { control, handleSubmit } = useForm<ProfileValues>({
        resolver: zodResolver(profileSchema),
        mode: 'onChange',
    })

    const onFormSubmit = handleSubmit(async (onValid) => {

    })

    const researchLines = useFieldArray({
        control: control,
        name: 'otherResearchLines',
    })
    const { append: appendResearchLine, remove: removeResearchLine } = researchLines

    const projects = useFieldArray({
        control: control,
        name: 'currentProjects'
    })
    const { append: appendProject, remove: removeProject } = projects

    const awards = useFieldArray({
        control: control,
        name: 'awardOrAchievement'
    })
    const { append: appendAward, remove: removeAward } = awards

    return (
        <Card className="mx-auto max-w-lg my-10">
            <CardContent>
                <form onSubmit={onFormSubmit}>
                    <fieldset className="space-y-5">
                        <h2 className="text-2xl font-semibold">Basic Information</h2>

                        <Controller
                            name="name"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        Full Name
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            {...field}
                                            id="form-rhf-demo-description"
                                            placeholder="I'm having an issue with the login button on mobile."
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="authorName"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        Author Name
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            {...field}
                                            id="form-rhf-demo-description"
                                            placeholder="I'm having an issue with the login button on mobile."
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>
                                        Este es el nombre que aparece en tus artículos publicados.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        Email
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            {...field}
                                            id="form-rhf-demo-description"
                                            placeholder="I'm having an issue with the login button on mobile."
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>
                                        Este es el nombre que aparece en tus artículos publicados.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="biography"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        Profile bio
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="form-rhf-demo-description"
                                            rows={8}
                                            className="resize-none min-h-40"
                                            placeholder="I'm having an issue with the login button on mobile."
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums ml-auto">
                                                {countWords(field.value)}/100 words
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>
                                        Este es el nombre que aparece en tus artículos publicados.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        


                        <Separator />
                        <h2 className="text-2xl font-semibold">Research Line</h2>

                        <Controller
                            name="mainResearchLine"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        Main Research Line
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            {...field}
                                            id="form-rhf-demo-description"
                                            placeholder="I'm having an issue with the login button on mobile."
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="mainResearchLineDesc"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                        Description
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            {...field}
                                            id="form-rhf-demo-description"
                                            placeholder="I'm having an issue with the login button on mobile."
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <h3 className="text-xl font-semibold">Other Research Lines</h3>

                        <Button type="button" onClick={() => appendResearchLine({ description: '' })}>
                            <Plus />Add
                        </Button>

                        <Button type="button" variant="destructive" onClick={() => removeResearchLine(researchLines.fields.length - 1)}>
                            <X /> Remove
                        </Button>

                        <FieldSet className="gap-4">
                            <FieldLegend variant="label">Other Research Lines</FieldLegend>
                            <FieldDescription>
                                Add up to 5 email addresses where we can contact you.
                            </FieldDescription>
                            <FieldGroup className="gap-4">
                                {researchLines.fields.map((field, index) => (
                                    <Controller
                                        key={field.id}
                                        name={`otherResearchLines.${index}.description`}
                                        control={control}
                                        defaultValue={''}
                                        render={({ field: controllerField, fieldState }) => (
                                            <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                                                <FieldContent>
                                                    <InputGroup>
                                                        <InputGroupTextarea
                                                            {...controllerField}
                                                            id={`${controllerField.name}-${index}`}
                                                            rows={3}
                                                            className="resize-none min-h-10"
                                                            aria-invalid={fieldState.invalid}
                                                        />
                                                        <InputGroupAddon align="block-end">
                                                            <InputGroupText className="tabular-nums ml-auto">
                                                                {countWords(controllerField.value)}/30 words
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                </FieldContent>
                                            </Field>
                                        )}
                                    />
                                ))}
                            </FieldGroup>
                        </FieldSet>

                        <h2 className="text-2xl font-semibold">Current Projects</h2>


                        <Button type="button" onClick={() => appendProject({ description: '' })}>
                            <Plus />Add
                        </Button>

                        <Button type="button" variant="destructive" onClick={() => removeProject(projects.fields.length - 1)}>
                            <X /> Remove
                        </Button>
                        <FieldSet className="gap-4">
                            <FieldLegend variant="label">Current Projects</FieldLegend>
                            <FieldDescription>
                                Add up to 5 email addresses where we can contact you.
                            </FieldDescription>
                            <FieldGroup className="gap-4">
                                {projects.fields.map((field, index) => (
                                    <Controller
                                        key={field.id}
                                        name={`currentProjects.${index}.description`}
                                        control={control}
                                        defaultValue={''}
                                        render={({ field: controllerField, fieldState }) => (
                                            <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                                                <FieldContent>
                                                    <InputGroup>
                                                        <InputGroupTextarea
                                                            {...controllerField}
                                                            id={`${controllerField.name}-${index}`}
                                                            rows={3}
                                                            className="resize-none min-h-10"
                                                            aria-invalid={fieldState.invalid}
                                                        />
                                                        <InputGroupAddon align="block-end">
                                                            <InputGroupText className="tabular-nums ml-auto">
                                                                {countWords(controllerField.value)}/30 words
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                </FieldContent>
                                            </Field>
                                        )}
                                    />
                                ))}
                            </FieldGroup>
                        </FieldSet>


                        <h2 className="text-2xl font-semibold">Software Tools</h2>
                        <Controller
                            name="softwareTools.name"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Email
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            {...field}
                                            id={field.name}
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="inline-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>
                                        Este es el nombre que aparece en tus artículos publicados.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="softwareTools.description"
                            defaultValue=""
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Profile bio
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id={field.name}
                                            rows={8}
                                            className="resize-none min-h-40"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums ml-auto">
                                                {countWords(field.value)}/30 words
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>
                                        Este es el nombre que aparece en tus artículos publicados.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <h2 className="text-2xl font-semibold">Awards, Honors & Achievements</h2>
                        <Button type="button" onClick={() => appendAward({
                            name: '',
                            description: '',
                            institutionAndYear: '',
                        })}>
                            <Plus />Add
                        </Button>

                        <Button type="button" variant="destructive" onClick={() => removeAward(awards.fields.length - 1)}>
                            <X /> Remove
                        </Button>

                        <FieldSet className="gap-4">
                            <FieldGroup className="gap-4">
                                {awards.fields.map((field, index) => (
                                    <>
                                        <Controller
                                            name={`awardOrAchievement.${index}.name`}
                                            defaultValue=""
                                            control={control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel htmlFor={field.name}>
                                                        Award Name
                                                    </FieldLabel>
                                                    <InputGroup>
                                                        <InputGroupInput
                                                            {...field}
                                                            id="form-rhf-demo-description"
                                                            placeholder="I'm having an issue with the login button on mobile."
                                                            aria-invalid={fieldState.invalid}
                                                        />
                                                        <InputGroupAddon align="inline-end">
                                                            <InputGroupText className="tabular-nums">
                                                                {field.value.length}/15 words
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                    {fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            key={field.id}
                                            name={`awardOrAchievement.${index}.description`}
                                            control={control}
                                            defaultValue={''}
                                            render={({ field: controllerField, fieldState }) => (
                                                <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                                                    <FieldContent>
                                                        <FieldLabel htmlFor={controllerField.name}>
                                                            Description
                                                        </FieldLabel>
                                                        <InputGroup>
                                                            <InputGroupTextarea
                                                                {...controllerField}
                                                                id={`${controllerField.name}-${index}`}
                                                                rows={3}
                                                                className="resize-none min-h-10"
                                                                aria-invalid={fieldState.invalid}
                                                            />
                                                            <InputGroupAddon align="block-end">
                                                                <InputGroupText className="tabular-nums ml-auto">
                                                                    {countWords(controllerField.value)}/30 words
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                        </InputGroup>
                                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                    </FieldContent>
                                                </Field>
                                            )}
                                        />
                                        <Controller
                                            name={`awardOrAchievement.${index}.institutionAndYear`}
                                            defaultValue=""
                                            control={control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel htmlFor="form-rhf-demo-description">
                                                        Institution and year
                                                    </FieldLabel>
                                                    <InputGroup>
                                                        <InputGroupInput
                                                            {...field}
                                                            id="form-rhf-demo-description"
                                                            placeholder="I'm having an issue with the login button on mobile."
                                                            aria-invalid={fieldState.invalid}
                                                        />
                                                        <InputGroupAddon align="inline-end">
                                                            <InputGroupText className="tabular-nums">
                                                                {field.value.length}/15 words
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                    </InputGroup>
                                                    {fieldState.invalid && (
                                                        <FieldError errors={[fieldState.error]} />
                                                    )}
                                                </Field>
                                            )}
                                        />
                                    </>
                                ))}
                            </FieldGroup>
                        </FieldSet>

                    </fieldset>
                </form>
            </CardContent>

            <CardContent>
                <UserPictureForm/>
            </CardContent>
        </Card>
    )
}

export default EditProfilePage
