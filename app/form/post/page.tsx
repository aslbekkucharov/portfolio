'use client'

import { useFormik } from "formik"
import { Link } from "@nextui-org/link"
import { useRouter } from "next/navigation"
import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"

import { fetcher } from "@/tools/api"
import Editor from "@/components/common/Editor"
import { ChewronRight } from "@/components/icons"
import { makeSchema } from "@/validations/schemas"

interface FormData {
    postTitle: string
    postContent: string
    postShortDescription: string
}

export default function PostForm() {

    const router = useRouter()

    const { errors, touched, values, isSubmitting, setFieldValue, handleSubmit, handleChange, handleBlur } = useFormik<FormData>({
        async onSubmit(val: any, { setSubmitting }) {

            const reqBody = JSON.stringify({
                title: val.postTitle,
                content: val.postContent,
                shortDescription: val.postShortDescription
            })

            try {
                setSubmitting(true)

                const response = await fetcher('/posts', { method: 'POST', body: reqBody })

                if (response.status === 201) {
                    router.push('/posts')
                }

            } catch (error) {

                console.log(error);

            } finally {
                setSubmitting(false)
            }

        },
        initialValues: {
            postTitle: '',
            postContent: '',
            postShortDescription: ''
        },
        validateOnBlur: true,
        validationSchema: makeSchema(['postTitle', 'postShortDescription', 'postContent'])
    })

    function handleEditorChange(payload: string) {
        setFieldValue('postContent', payload)
    }

    return (
        <div className="flex flex-col px-4">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center relative my-5">
                    <Button as={Link} href="/" size="sm" variant='light' color="primary" isIconOnly={true} className="absolute left-0">
                        <ChewronRight size={15} viewBox="0 0 24 24" />
                    </Button>
                    <h2 className="text-center font-medium">Creatig new post</h2>
                </div>
            </div>

            <div className="mt-8 pb-10">
                <form onSubmit={handleSubmit} className="flex flex-col sm:grid sm:grid-cols-2 gap-x-3 gap-y-6">

                    <label className="col-span-2 flex flex-col gap-2">
                        <span className="font-medium">Title</span>
                        <Input
                            size="lg"
                            radius="sm"
                            maxLength={300}
                            name="postTitle"
                            variant="bordered"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.postTitle}
                            placeholder="Post title"
                            isInvalid={touched.postTitle && !!errors.postTitle}
                            errorMessage={touched.postTitle && errors.postTitle}
                            aria-label="Skill's gained or used during work in company"
                            color={touched.postTitle && !!errors.postTitle ? 'danger' : 'default'}
                        />
                    </label>

                    <label className="col-span-2 flex flex-col gap-2">
                        <span className="font-medium">Short description</span>
                        <Textarea
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="postShortDescription"
                            value={values.postShortDescription}
                            placeholder="Post short description"
                            aria-label="Short description for post"
                            isInvalid={touched.postShortDescription && !!errors.postShortDescription}
                            errorMessage={touched.postShortDescription && errors.postShortDescription}
                            color={touched.postShortDescription && !!errors.postShortDescription ? 'danger' : 'default'}
                        />
                    </label>

                    <span className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium">Content</span>
                        <Editor
                            id="postContent"
                            onBlur={handleBlur}
                            value={values.postContent}
                            onChange={handleEditorChange}
                            aria-label="Post content text editor"
                            isInvalid={touched.postContent && !!errors.postContent}
                            errorMessage={touched.postContent && errors.postContent}
                        />
                    </span>

                    <Button type='submit' isLoading={isSubmitting} color="primary" radius="sm" size="lg" className="col-span-2">
                        {isSubmitting ? null : <span className="font-medium">Create post</span>}
                    </Button>
                </form>
            </div>
        </div>
    )
}