import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import { Image } from "@nextui-org/image"
import { Button } from "@nextui-org/button"

export default function Auth() {

    return (
        <section className="h-full grid grid-cols-2">
            <div className="h-full flex flex-col items-center justify-center px-10">

                <div className="max-w-[425px] w-full">
                    <div className="flex flex-col gap-2 mb-8 w-full">
                        <h2 className="text-3xl font-medium text-left flex items-center gap-2">
                            <span>Welcome back!</span>
                            <Image
                                width={30}
                                height={30}
                                radius="none"
                                alt="Thunder emoji by Apple"
                                src="/images/emojis/thunder.png"
                            />
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400">
                            <span>Log in to your profile to create or manage your online CV. Still don&apos;t have an account?</span>
                            <Link href="/signup" className="ml-1 text-blue-500">Sign up</Link>
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 w-full">
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Username</span>
                            <Input variant="faded" placeholder="Johndoe" radius="sm" size="lg" />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="font-medium">Password</span>
                            <Input type="password" variant="faded" placeholder="At least 8 characters" radius="sm" size="lg" />
                        </label>
                        <div className="flex justify-end">
                            <Link href="/password-recover" className="text-blue-500">Forgot password?</Link>
                        </div>
                        <Button color="primary" radius="sm" size="lg" variant="solid">
                            <span className="font-semibold">Sign in</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-h-full overflow-hidden">
                <Image src="https://rb.gy/pjw6t3" radius="none" />
            </div>
        </section>
    )
}