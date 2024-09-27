import * as yup from 'yup'

type RuleField = 'email' | 'username' | 'password' | 'fullname'

const rules = {
    fullname: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').email('Invalid email format'),
    username: yup.string().required('This field is required').min(5, 'Minimum length must be 5 characters'),
    password: yup.string().required('This field is required').min(8, 'Minimum length must be 8 characters')
}

export function makeSchema(fields: RuleField[] | RuleField) {
    if (Array.isArray(fields)) {
        const result: Record<string, any> = {}

        fields.forEach((name) => {
            result[name] = rules[name]

        })
        return yup.object().shape(result)
    }

    return yup.object().shape({
        [fields]: rules[fields]
    })
}