import * as yup from 'yup'

type RuleField = keyof typeof rules

const URL_REGEXP = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

const rules = {
    role: yup.string().required('This field is required'),
    startDate: yup.date().required('Start date is required'),
    company: yup.string().required('This field is required'),
    fullname: yup.string().required('This field is required'),
    postTitle: yup.string().required('This field is required'),
    postContent: yup.string().required('This field is required'),
    companyLink: yup.string().matches(URL_REGEXP, 'Enter valid url!'),
    postShortDescription: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').email('Invalid email format'),
    skills: yup.string().required('Enter skills that you have acquired or used in your work'),
    username: yup.string().required('This field is required').min(5, 'Minimum length must be 5 characters'),
    password: yup.string().required('This field is required').min(8, 'Minimum length must be 8 characters'),
    endDate: yup.date().required('End date is required').min(yup.ref('startDate'), "End date can't be before start date"),
    shortDescription: yup.string().max(1000, 'The 1000 character limit has been reached').required('This field is required'),
    aboutJob: yup.string().matches(/^(?!<p>\s*<\/p>$)/, 'Give some description of what you did at work').required('Give some description of what you did at work'),
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