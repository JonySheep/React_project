// import * as React from 'react';
// import {MemberEntity} from "./mode/member";
// import {MemberRow} from "./memberRow";
// import {MemberHead} from "./memberHead";
//
// interface Props{
//
// }
//
// interface State{
//     member:Array<MemberEntity>
// }
//
// export class MembersTableComponent extends React.Component<Props,State>{
//     constructor(props:Props){
//         super(props);
//         this.state={member:[]};
//     }
//
//     public componentDidMount(){
//         memberAPI.getAllMembers().then((members)=>
//             this.setState({member:members}))
//     }
//
//     public render(){
//         return(
//             <div className="row">
//                 <h2>Member Page</h2>
//                 <table className="table"></table>
//                     <MemberHead />
//                     <tbody>
//                     {
//                         this.state.member.map((member:MemberEntity)=>
//                             <MemberRow member={member} key={member.id}/>)
//                     }
//                     </tbody>
//             </div>
//         );
//     }
// }