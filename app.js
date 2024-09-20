const heading = React.createElement('h1',{id:'heading'},'Hello World from React');
console.log(heading);
/* {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
$$typeof
: 
Symbol(react.element)
key
: 
null
props
: 
children
: 
"Hello World from React"
id
: 
"heading"
[[Prototype]]
: 
Object
ref
: 
null
type
: 
"h1"
_owner
: 
null
_store
: 
{validated: false}
_self
: 
null
_source
: 
null
[[Prototype]]
: 
Object*/
    // <!------------creating root for render this heading----->

    // nested html elements creating using react
    const parent = React.createElement('div',{id:"parent"},
    [React.createElement('div',{id:"child"},[React.createElement('h1',{},'I am h1 heading from nested div'),
    React.createElement('h2',{},'I am h2 heading from nested div')],
React.createElement('div',{id:"child2"},[React.createElement('h1',{},'I am h1 heading from  child2'),
React.createElement('h2',{},'I am h2 heading from child2')])
)
]);
console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    //root.render(heading);
    root.render(parent);