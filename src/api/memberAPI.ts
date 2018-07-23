import {MemberEntity} from "../mode/member";
import MemberMockData from './memberMockData';

class MemberAPI{
    private _clone(item){
        return JSON.parse(JSON.stringify(item));
    };

    private checkStatus(response:Response):Promise<Response>{
        if(response.status>=200 && response.status<300){
            return Promise.resolve(response)
        }
        else{
            let error=new Error(response.statusText);
            throw error;
        }
    }

    private parseJSON(response:Response):any{
        return response.json();
    }

    private resolveMembers(data:any):Promise<MemberEntity[]>{
        const members=data.map((githubMember)=>{
            var member:MemberEntity={
                id:githubMember.id,
                login:githubMember.login,
                avatar_url:githubMember.avatar_url
            };
            return member
        });

        return Promise.resolve(members);
    }

    getAllMembers():Promise<MemberEntity[]>{
        const githubMemberUrl:string='https://api.github.com/orgs/lemoncode/members';

        return fetch(githubMemberUrl)
            .then((response)=>this.checkStatus(response))
            .then((response)=>this.parseJSON(response))
            .then((data)=>this.resolveMembers(data))
    };


}

export const memberAPI=new MemberAPI();