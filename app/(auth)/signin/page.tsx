'use client'

import { useFormik } from "formik"
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"
import { makeSchema } from "@/validations/schemas"

export default function Auth() {
    const { errors, touched, values, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validateOnBlur: true,
        validationSchema: makeSchema(['username', 'password']),
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => setSubmitting(false), 2000)
        }
    })

    return (
        <section className="h-full lg:grid grid-cols-2">
            <div className="h-full flex flex-col items-center justify-center px-4 sm:px-10">

                <div className="max-w-[425px] w-full">
                    <div className="flex flex-col gap-2 mb-8 w-full">
                        <h2 className="text-3xl font-medium text-left flex items-center gap-2">
                            <span>Welcome back!</span>
                            <Image src="/images/emojis/thunder.png" width={30} height={30} radius="none" alt="Thunder emoji by Apple" />
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400">Log in to your profile to create or manage your online CV.</p>
                        <p className="text-slate-500">
                            <span>Still don&apos;t have an account?</span>
                            <Link href="/signup" className="ml-1 text-blue-500">Sign up</Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Username</span>
                            <Input
                                size="lg"
                                radius="sm"
                                name="username"
                                variant="bordered"
                                onBlur={handleBlur}
                                placeholder="Johndoe"
                                onChange={handleChange}
                                value={values.username}
                                isInvalid={touched.username && !!errors.username}
                                errorMessage={touched.username && errors.username}
                                color={touched.username && !!errors.username ? 'danger' : 'default'}
                            />
                            {touched.username}
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Password</span>
                            <Input
                                size="lg"
                                radius="sm"
                                name='password'
                                type="password"
                                variant="bordered"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                placeholder="At least 8 characters"
                                isInvalid={touched.password && !!errors.password}
                                errorMessage={touched.password && errors.password}
                                color={touched.username && !!errors.username ? 'danger' : 'default'}
                            />
                        </label>
                        <div className="flex justify-end">
                            <Link href="/password-recover" className="text-blue-500">Forgot password?</Link>
                        </div>
                        <Button type="submit" color="primary" isLoading={isSubmitting} radius="sm" size="lg" variant="solid">
                            {isSubmitting ? null : <span className="font-semibold">Sign in</span>}
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