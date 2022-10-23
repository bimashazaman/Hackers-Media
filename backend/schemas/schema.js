
import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import pin from './pin'
import comment from './comment'
import save from './save'
import postedBy from './postedBy'


export default createSchema({
 
  name: 'default',
  
  types: schemaTypes.concat([
  user,
  pin,
  comment,
  save,
  postedBy
  ]),
})
