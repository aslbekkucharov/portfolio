'use client'

import { useFormik } from "formik"
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"

import Editor from "@/components/common/Editor"
import { ChewronRight } from "@/components/icons"
import { makeSchema } from "@/validations/schemas"
import { DatePicker } from "@nextui-org/date-picker"
import { getLocalTimeZone, today } from "@internationalized/date"

export default function ExperienceForm() {

    const { errors, touched, values, isSubmitting, setFieldValue, handleSubmit, handleChange, handleBlur } = useFormik({
        onSubmit(_, { setSubmitting }) {
            setTimeout(() => setSubmitting(false), 2000)
        },
        initialValues: {
            skills: '',
            company: '',
            aboutJob: '',
            endDate: null,
            companyLink: '',
            startDate: null
        },
        validateOnBlur: true,
        validationSchema: makeSchema(['startDate', 'endDate', 'company', 'companyLink', 'skills', 'aboutJob'])
    })

    function handleEditorChange(payload: string) {
        setFieldValue('aboutJob', payload)
    }

    return (
        <div className="flex flex-col px-4">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center relative my-5">
                    <Button as={Link} href="/" size="sm" variant='light' color="primary" isIconOnly={true} className="absolute left-0">
                        <ChewronRight size={15} viewBox="0 0 24 24" />
                    </Button>
                    <h2 className="text-center font-medium">Creatig new experience</h2>
                </div>
            </div>

            <div className="mt-8 pb-10">
                <form onSubmit={handleSubmit} className="flex flex-col sm:grid sm:grid-cols-2 gap-x-3 gap-y-6">
                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Job start date</span>
                        <DatePicker
                            size="lg"
                            radius="sm"
                            name="startDate"
                            variant="bordered"
                            onBlur={handleBlur}
                            hideTimeZone={true}
                            value={values.startDate}
                            aria-label="Job start date"
                            showMonthAndYearPickers={true}
                            maxValue={today(getLocalTimeZone())}
                            selectorButtonProps={{ size: 'md' }}
                            isInvalid={touched.startDate && !!errors.startDate}
                            errorMessage={touched.startDate && errors.startDate}
                            onChange={(value) => setFieldValue('startDate', value)}
                            color={touched.startDate && !!errors.startDate ? 'danger' : 'default'}
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Job end date</span>
                        <DatePicker
                            size="lg"
                            radius="sm"
                            name="endDate"
                            variant="bordered"
                            hideTimeZone={true}
                            onBlur={handleBlur}
                            value={values.endDate}
                            aria-label="Job end date"
                            showMonthAndYearPickers={true}
                            selectorButtonProps={{ size: 'md' }}
                            maxValue={today(getLocalTimeZone())}
                            isInvalid={touched.endDate && !!errors.endDate}
                            errorMessage={touched.endDate && errors.endDate}
                            onChange={(value) => setFieldValue('endDate', value)}
                            color={touched.endDate && !!errors.endDate ? 'danger' : 'default'}
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Company</span>
                        <Input
                            size="lg"
                            radius="sm"
                            name="company"
                            variant="bordered"
                            onBlur={handleBlur}
                            value={values.company}
                            onChange={handleChange}
                            aria-label="Company name"
                            placeholder="Example: Uber"
                            isInvalid={touched.company && !!errors.company}
                            errorMessage={touched.company && errors.company}
                            color={touched.company && !!errors.company ? 'danger' : 'default'}
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Company website</span>
                        <Input
                            size="lg"
                            radius="sm"
                            name="companyLink"
                            variant="bordered"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.companyLink}
                            aria-label="Company website"
                            placeholder="Example: https://www.uber.com"
                            isInvalid={touched.companyLink && !!errors.companyLink}
                            errorMessage={touched.companyLink && errors.companyLink}
                            color={touched.companyLink && !!errors.companyLink ? 'danger' : 'default'}
                        />
                    </label>

                    <span className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium">About Company</span>
                        <Editor
                            id="aboutJob"
                            onBlur={handleBlur}
                            value={values.aboutJob}
                            onChange={handleEditorChange}
                            aria-label="About company text editor"
                            isInvalid={touched.aboutJob && !!errors.aboutJob}
                            errorMessage={touched.aboutJob && errors.aboutJob}
                        />
                    </span>

                    <label className="col-span-2 flex flex-col gap-2">
                        <span className="font-medium">Skills used/gained</span>
                        <Input
                            size="lg"
                            radius="sm"
                            name="skills"
                            variant="bordered"
                            onBlur={handleBlur}
                            value={values.skills}
                            onChange={handleChange}
                            isInvalid={touched.skills && !!errors.skills}
                            errorMessage={touched.skills && errors.skills}
                            placeholder="Example: PHP, Laravel, Javascript..."
                            aria-label="Skill's gained or used during work in company"
                            color={touched.skills && !!errors.skills ? 'danger' : 'default'}
                        />
                    </label>
                    <Button type='submit' isLoading={isSubmitting} color="primary" radius="sm" size="lg" className="col-span-2">
                        {isSubmitting ? null : <span className="font-medium">Create new experience</span>}
                    </Button>
                </form>
            </div>
        </div>
    )
}