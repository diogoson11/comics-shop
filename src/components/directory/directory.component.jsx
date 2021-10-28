import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'
class Directory extends React.Component {

    constructor(){
        super();

        this.state  = {
            sections: [
                {
                'title':'COMIC BOOKS',
                'imageUrl':'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
                'id': 1
            },
            {
                'title':'COMIC STATUES',
                'imageUrl':'https://images.unsplash.com/photo-1608272841063-67f50df421c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
                'id': 2
            },
            {
                'title':'COMIC T-SHIRTS',
                'imageUrl':'https://images.unsplash.com/photo-1565789570436-42f098510e4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
                'id': 3
            },
            {
                'title':'BEST SELLERS',
                'imageUrl':'https://images.unsplash.com/photo-1618058368547-e10c14427722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                'size': 'large',
                'id': 4
            },
            {
                'title':'EXCLUSIVES',
                'imageUrl':'https://images.unsplash.com/photo-1634828221818-503587f33d02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1065&q=80',
                'size': 'large',
                'id': 5
            },
        ]
        }
    }    
    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl,id,size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            
            </div>
        )
    }


}
export default Directory;