'use client'

import { useFormik } from "formik"
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import { makeSchema } from "@/validations/schemas"

export default function Auth() {

    const { touched, errors, values, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            username: '',
            fullname: '',
            password: ''
        },
        validateOnBlur: true,
        validationSchema: makeSchema(['email', 'password', 'username', 'fullname']),
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false)
            }, 2000);
        }
    })

    return (
        <section className="h-full grid lg:grid-cols-2">
            <div className="h-full flex flex-col items-center justify-center px-4 sm:px-10">

                <div className="max-w-[425px] w-full">
                    <div className="flex flex-col gap-2 mb-8 w-full">
                        <h2 className="text-3xl font-medium text-left flex items-center justify-center sm:justify-start gap-2">
                            <span>Welcome!</span>
                            <Image
                                width={30}
                                height={30}
                                radius="none"
                                alt="Thunder emoji by Apple"
                                src="/images/emojis/thunder.png"
                            />
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 text-center sm:text-left">
                            <span>Create an account on one of the best resume building services</span>
                        </p>
                        <p className="text-slate-500 text-center sm:text-left">Already have an account? <Link href="/signin" className="ml-1 text-blue-500">Sign in</Link></p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
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
                                placeholder="Example: John Doe"
                                isInvalid={touched.fullname && !!errors.fullname}
                                errorMessage={touched.fullname && errors.fullname}
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Email</span>
                            <Input
                                size="lg"
                                radius="sm"
                                type="email"
                                name="email"
                                variant="bordered"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Example: johndoe@doe.com"
                                isInvalid={touched.email && !!errors.email}
                                errorMessage={touched.email && errors.email}
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Username</span>
                            <Input
                                size="lg"
                                radius="sm"
                                name="username"
                                variant="bordered"
                                onBlur={handleBlur}
                                value={values.username}
                                onChange={handleChange}
                                placeholder="Example: johndoe"
                                isInvalid={touched.username && !!errors.username}
                                errorMessage={touched.username && errors.username}
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Password</span>
                            <Input 
                                size="lg" 
                                radius="sm" 
                                type="password" 
                                name="password"
                                variant="bordered" 
                                onBlur={handleBlur}
                                value={values.password}
                                onChange={handleChange}
                                placeholder="At least 8 characters"
                                isInvalid={touched.password && !!errors.password}
                                errorMessage={touched.password && errors.password}
                            />
                        </label>
                        <Button type="submit" color="primary" radius="sm" size="lg" isLoading={isSubmitting} variant="solid">
                            {isSubmitting ? null : <span className="font-semibold">Sign up</span>}
                        </Button>
                    </form>
                </div>
            </div>

            <div className="max-h-full overflow-hidden hidden lg:block">
                <Image src="https://rb.gy/pjw6t3" radius="none" />
            </div>
        </section>
    )
}