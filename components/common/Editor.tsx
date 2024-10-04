'use client'

import { Button } from '@nextui-org/button'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEditor, EditorContent } from '@tiptap/react'

import { BulletList, CodeBlock, Italic, OrderedList, Quote, TextBold, TextStrike } from '@/components/icons'
import clsx from 'clsx'
import { ReactNode, useEffect } from 'react'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

interface Props {
    id?: string
    value: string
    isInvalid?: boolean
    errorMessage?: ReactNode
    onBlur?: (...args: any) => void
    onChange: (payload: any) => void
}

export default function Editor(props: Props) {

    const editor = useEditor({
        content: '',
        immediatelyRender: false,
        onBlur({ editor, event }) {
            if (editor.isEmpty) {
                props.onChange('')
                editor.commands.clearContent(true)
            }

            props.onBlur?.(event, props.id)
        },
        onUpdate({ editor }) {
            props.onChange(editor.getHTML())
        },
        extensions: [
            TextStyle,
            StarterKit,
            Color.configure({ types: ['textStyle'] }),
            Placeholder.configure({
                placeholder: 'Example: Uber is a transportation and ride-sharing company that connects people, what duties you performed, etc...'
            })
        ],
        editorProps: {
            attributes: {
                id: props.id ? props.id : '',
                class: 'min-h-64 max-h-72 overflow-auto outline-none py-2 px-3'
            }
        }
    })

    useEffect(() => {
        if (editor) {
            editor.commands.setContent(props.value)
        }
    }, [editor, props.value])

    return (
        <>
            <div className={clsx('group relative shadow-sm border-default-200 border-medium hover:border-default-400 focus-within:!border-default-foreground rounded-small !duration-150 transition-colors', props.isInvalid && '!border-danger focus-within:!border-danger')}>
                <div className={clsx("flex flex-wrap gap-1 p-2 border-b-2 border-default-200 group-hover:border-default-400 group-focus-within:!border-default-foreground !duration-150 transition-colors", props.isInvalid && '!border-danger group-focus-within:!border-danger')}>
                    <Button onClick={() => editor?.chain().focus().toggleBulletList().run()} color='primary' size='sm' title='Quote' variant={editor?.isActive('bulletList') ? 'solid' : 'light'} isIconOnly={true}>
                        <BulletList size={18} viewBox='0 0 20 20' />
                    </Button>
                    <Button onClick={() => editor?.chain().focus().toggleOrderedList().run()} color='primary' size='sm' title='Quote' variant={editor?.isActive('orderedList') ? 'solid' : 'light'} isIconOnly={true}>
                        <OrderedList size={18} viewBox='0 0 24 24' />
                    </Button>
                    <Button onClick={() => editor?.chain().focus().toggleStrike().run()} color='primary' size='sm' title='Quote' variant={editor?.isActive('strike') ? 'solid' : 'light'} isIconOnly={true}>
                        <TextStrike size={20} viewBox='0 0 24 20' />
                    </Button>
                    <Button onClick={() => editor?.chain().focus().toggleItalic().run()} color='primary' size='sm' title='Quote' variant={editor?.isActive('italic') ? 'solid' : 'light'} isIconOnly={true}>
                        <Italic size={20} viewBox='0 0 24 20' />
                    </Button>
                    <Button onClick={() => editor?.chain().focus().toggleBold().run()} color='primary' size='sm' title='Quote' variant={editor?.isActive('bold') ? 'solid' : 'light'} isIconOnly={true}>
                        <TextBold size={16} viewBox='0 0 16 14' />
                    </Button>
                    <Button onClick={() => editor?.chain().focus().toggleCodeBlock().run()} color='primary' size='sm' title='Quote' variant={editor?.isActive('codeBlock') ? 'solid' : 'light'} isIconOnly={true}>
                        <CodeBlock size={18} viewBox='0 0 16 16' />
                    </Button>
                    <Button onClick={() => editor?.chain().focus().toggleBlockquote().run()} color='primary' size='sm' title='Quote' variant={editor?.isActive('blockquote') ? 'solid' : 'light'} isIconOnly={true}>
                        <Quote size={20} viewBox='0 0 16 14' />
                    </Button>
                    <Button color='primary' size='sm' title='Quote' variant={editor?.isActive('blockquote') ? 'solid' : 'light'} isIconOnly={true}>
                        <input
                            type="color"
                            data-testid="setColor"
                            value={editor?.getAttributes('textStyle').color}
                            className='w-6 h-6 border-none border-transparent bg-transparent rounded-lg'
                            onInput={event => editor?.chain().focus().setColor(event.target.value).run()}
                        />
                    </Button>
                </div>
                <EditorContent editor={editor} />
            </div>
            <div className={clsx('relative flex-col gap-1.5', props.isInvalid ? 'flex' : 'hidden')}>
                <div className="text-tiny text-danger">
                    {props.errorMessage}
                </div>
            </div>
        </>
    )
}