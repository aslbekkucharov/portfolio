'use client'

import { useFormik } from "formik"
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"

import Editor from "@/components/common/Editor"
import { ChewronRight } from "@/components/icons"
import { makeSchema } from "@/validations/schemas"

export default function AboutForm() {

    const { errors, touched, values, isSubmitting, setFieldValue, handleSubmit, handleChange, handleBlur } = useFormik({
        onSubmit(_, { setSubmitting }) {
            setTimeout(() => setSubmitting(false), 2000)
        },
        initialValues: {
            role: '',
            skills: '',
            fullname: '',
            volunteering: '',
            shortDescription: ''
        },
        validateOnBlur: true,
        validationSchema: makeSchema(['skills', 'shortDescription', "fullname", 'role'])
    })

    function handleEditorChange(payload: string) {
        setFieldValue('volunteering', payload)
    }

    return (
        <div className="flex flex-col px-4">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center relative my-5">
                    <Button as={Link} href="/" size="sm" variant='light' color="primary" isIconOnly={true} className="absolute left-0">
                        <ChewronRight size={15} viewBox="0 0 24 24" />
                    </Button>
                    <h2 className="text-center font-medium">Editing about information</h2>
                </div>
            </div>

            <div className="mt-8 pb-10">
                <form onSubmit={handleSubmit} className="flex flex-col sm:grid sm:grid-cols-2 gap-x-3 gap-y-6">

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Fullname</span>
                        <Input
                            size="lg"
                            radius="sm"
                            name="fullname"
                            variant="bordered"
                            onBlur={handleBlur}
                            value={values.fullname}
                            onChange={handleChange}
                            aria-label="User fullname"
                            placeholder="Example: John Doe"
                            isInvalid={touched.fullname && !!errors.fullname}
                            errorMessage={touched.fullname && errors.fullname}
                            color={touched.fullname && !!errors.fullname ? 'danger' : 'default'}
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Role</span>
                        <Input
                            size="lg"
                            radius="sm"
                            name="role"
                            variant="bordered"
                            onBlur={handleBlur}
                            value={values.role}
                            onChange={handleChange}
                            aria-label="User job role"
                            placeholder="Example: Software Engineer"
                            isInvalid={touched.role && !!errors.role}
                            errorMessage={touched.role && errors.role}
                            color={touched.role && !!errors.role ? 'danger' : 'default'}
                        />
                    </label>

                    <label className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium">About yourselft</span>
                        <Textarea
                            size="lg"
                            radius="sm"
                            minRows={10}
                            maxLength={1000}
                            variant="bordered"
                            onBlur={handleBlur}
                            name="shortDescription"
                            onChange={handleChange}
                            value={values.shortDescription}
                            aria-label="Short description about yourselft"
                            placeholder="Enter short description about yourselft"
                            isInvalid={touched.shortDescription && !!errors.shortDescription}
                            errorMessage={touched.shortDescription && errors.shortDescription}
                            color={touched.shortDescription && !!errors.shortDescription ? 'danger' : 'default'}
                        />
                    </label>

                    <span className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium">Volunteering <span className="text-slate-500 font-normal">(optional)</span></span>
                        <Editor
                            id="volunteering"
                            onBlur={handleBlur}
                            value={values.volunteering}
                            onChange={handleEditorChange}
                            aria-label="Volunteering experience if available"
                            isInvalid={touched.volunteering && !!errors.volunteering}
                            errorMessage={touched.volunteering && errors.volunteering}
                        />
                    </span>

                    <label className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium">Skills/Techonlogies</span>
                        <Input
                            size="lg"
                            radius="sm"
                            name="skills"
                            variant="bordered"
                            onBlur={handleBlur}
                            value={values.skills}
                            onChange={handleChange}
                            aria-label="Professionally owned skills/technologies"
                            isInvalid={touched.skills && !!errors.skills}
                            errorMessage={touched.skills && errors.skills}
                            color={touched.skills && !!errors.skills ? 'danger' : 'default'}
                            placeholder="Enter professionally owned skills/technologies separated by a comma"
                        />
                    </label>

                    <Button type='submit' isLoading={isSubmitting} color="primary" radius="sm" size="lg" className="col-span-2">
                        {isSubmitting ? null : <span className="font-medium">Save changes</span>}
                    </Button>
                </form>
            </div>
        </div>
    )
}