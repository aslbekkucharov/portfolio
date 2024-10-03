'use client'

import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { DatePicker } from "@nextui-org/date-picker"

import Editor from "@/components/common/Editor"
import { ChewronRight } from "@/components/icons"

export default function ExperienceForm() {
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
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-3 gap-y-6">
                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Job start date</span>
                        <DatePicker
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            hideTimeZone={true}
                            aria-label="Job start date"
                            showMonthAndYearPickers={true}
                            selectorButtonProps={{ size: 'lg' }}
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Job end date</span>
                        <DatePicker
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            hideTimeZone={true}
                            aria-label="Job end date"
                            showMonthAndYearPickers={true}
                            selectorButtonProps={{ size: 'lg' }}
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Company</span>
                        <Input
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            aria-label="Company name"
                            placeholder="Example: Uber"
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Company website</span>
                        <Input
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            aria-label="Company website"
                            placeholder="Example: https://www.uber.com/"
                        />
                    </label>

                    <span className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium">About Company</span>
                        <Editor aria-label="About company text editor" />
                    </span>

                    <label className="col-span-2 flex flex-col gap-2">
                        <span className="font-medium">Skills used/gained</span>
                        <Input
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            placeholder="Example: PHP, Laravel, Javascript..."
                            aria-label="Skill's gained or used during work in company"
                        />
                    </label>
                    <Button color="primary" radius="sm" size="lg" className="col-span-2">
                        <span className="font-medium">Create new experience</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}