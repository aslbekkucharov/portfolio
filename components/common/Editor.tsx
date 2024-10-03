'use client'

import { Button } from '@nextui-org/button'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEditor, EditorContent } from '@tiptap/react'

import { BulletList, CodeBlock, HeadingFirstLevel, Italic, OrderedList, Quote, TextBold, TextStrike } from '@/components/icons'
import { Select, SelectItem } from '@nextui-org/select'

export default function Editor() {
    const editor = useEditor({
        content: '',
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Example: Uber is a transportation and ride-sharing company that connects people, what duties you performed, etc...'
            })
        ],
        editorProps: {
            attributes: {
                class: 'min-h-64 max-h-72 overflow-auto outline-none py-2 px-3'
            }
        }
    })

    return (
        <div tabIndex={1} className='group relative shadow-sm border-default-200 border-medium hover:border-default-400 focus-within:!border-default-foreground rounded-small !duration-150 transition-colors'>
            <div className="flex flex-wrap gap-1 p-2 border-b-2 border-default-200 group-hover:border-default-400 group-focus-within:!border-default-foreground !duration-150 transition-colors">
                {/* <Button size='sm' title='Quote' variant='light' isIconOnly={true}>
                    <HeadingFirstLevel size={20} viewBox='0 0 16 16' />
                </Button> */}
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
            </div>
            <EditorContent editor={editor} />
        </div>
    )
}