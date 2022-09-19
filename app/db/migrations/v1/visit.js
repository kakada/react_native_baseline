'use strict';

const VisitSchema = {
  name: 'Visit',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    user_uuid: 'string',
    visit_date: 'date',
    name: 'string',
    code: 'string',
    parent_code: 'string?',
  },
};

export default VisitSchema;
