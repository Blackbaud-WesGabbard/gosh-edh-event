import * as validators from 'constructicon/lib/validators'

export default ({ page }) => ({
  fields: {
    name: {
      label: 'Page Name',
      initial: page.name,
      validators: [validators.required('Please enter a page name')]
    },
    target: {
      label: 'Fundraising Goal ($)',
      type: 'number',
      initial: Math.round(page.target * 100) / 10000,
      validators: [
        validators.required('Please enter a fundraising target'),
        validators.number('Please enter a numeric target'),
        validators.greaterThan(0, 'Please enter a target greater than $0'),
        validators.lessThan(
          10000000,
          'Please enter a target less than $10,000,000'
        )
      ]
    },
    story: {
      label: 'Description',
      type: 'textarea',
      initial: page.story
    }
  }
})
