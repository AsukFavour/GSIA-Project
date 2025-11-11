export default {
    name: 'feesConfiguration',
    title: 'Fees Configuration',
    type: 'document',
    fields: [
      {
        name: 'feeType',
        title: 'Fee Type',
        type: 'string',
        options: {
          list: [
            { title: 'School Fees', value: 'School Fees' },
            { title: 'Books', value: 'Books' },
            { title: 'Uniform', value: 'Uniform' },
            { title: 'Others', value: 'Others' },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'class',
        title: 'Class',
        type: 'string',
        options: {
          list: [
            { title: 'Primary 1', value: 'Primary 1' },
            { title: 'Primary 2', value: 'Primary 2' },
            { title: 'Primary 3', value: 'Primary 3' },
            { title: 'Primary 4', value: 'Primary 4' },
            { title: 'Primary 5', value: 'Primary 5' },
            { title: 'Primary 6', value: 'Primary 6' },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'term',
        title: 'Term',
        type: 'string',
        options: {
          list: [
            { title: 'First Term', value: 'First Term' },
            { title: 'Second Term', value: 'Second Term' },
            { title: 'Third Term', value: 'Third Term' },
          ],
        },
        description: 'Only applicable for School Fees',
        hidden: ({ document }) => document?.feeType !== 'School Fees',
      },
      {
        name: 'amount',
        title: 'Amount (NGN)',
        type: 'number',
        validation: (Rule) => Rule.required().positive(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Optional description for this fee',
      },
      {
        name: 'isActive',
        title: 'Is Active',
        type: 'boolean',
        description: 'Set to false to temporarily disable this fee',
        initialValue: true,
      },
    ],
    preview: {
      select: {
        feeType: 'feeType',
        class: 'class',
        term: 'term',
        amount: 'amount',
      },
      prepare(selection) {
        const { feeType, class: className, term, amount } = selection;
        const termInfo = term ? ` - ${term}` : '';
        return {
          title: `${feeType} - ${className}${termInfo}`,
          subtitle: `₦${amount?.toLocaleString()}`,
        };
      },
    },
  };