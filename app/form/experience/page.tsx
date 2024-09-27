'use client'

import { Link } from "@nextui-org/link"
import { ChewronRight } from "@/components/icons"
import { Input, Textarea } from "@nextui-org/input"
import { DatePicker } from "@nextui-org/date-picker"

export default function ExperienceForm() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-8">
                <div className="w-full bg-slate-100 dark:bg-theme-dark-500">
                    <Link href="/" className="flex items-center gap-2 p-6 hover:bg-slate-200 dark:hover:bg-theme-dark-400 transition-colors">
                        <ChewronRight size={15} viewBox="0 0 24 24" />
                        <span className="font-medium text-sm leading-none">Home</span>
                    </Link>
                </div>
                <div className="px-6">
                    <h2 className="text-2xl font-medium">Creatig new experience</h2>
                </div>
            </div>

            <div className="px-6 mt-8">
                <div className="grid grid-cols-2 gap-x-3 gap-y-6">
                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Job start date</span>
                        <DatePicker
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            hideTimeZone={true}
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
                            placeholder="Example: Uber"
                        />
                    </label>

                    <label className="flex flex-col gap-2">
                        <span className="font-medium">Company website</span>
                        <Input
                            size="lg"
                            radius="sm"
                            variant="bordered"
                            placeholder="Example: https://www.uber.com/"
                        />
                    </label>

                    <label className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium">About Company</span>
                        <Textarea
                            rows={6}
                            size="lg"
                            radius="sm"
                            maxLength={450}
                            variant="bordered"
                            placeholder="Example: Uber is a transportation and ride-sharing company that connects people..."
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}