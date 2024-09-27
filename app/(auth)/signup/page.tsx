import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"

export default function Auth() {

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

                    <div className="flex flex-col gap-5 w-full">
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Fullname</span>
                            <Input variant="faded" placeholder="Example: John Doe" radius="sm" size="lg" />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Email</span>
                            <Input variant="faded" placeholder="Example: johndoe@doe.com" radius="sm" size="lg" />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Username</span>
                            <Input variant="faded" placeholder="Example: johndoe" radius="sm" size="lg" />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Password</span>
                            <Input type="password" variant="faded" placeholder="At least 8 characters" radius="sm" size="lg" />
                        </label>
                        <Button color="primary" radius="sm" size="lg" variant="solid">
                            <span className="font-semibold">Sign up</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-h-full overflow-hidden hidden lg:block">
                <Image src="https://rb.gy/pjw6t3" radius="none" />
            </div>
        </section>
    )
}