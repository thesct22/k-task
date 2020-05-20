//const _ = require('lodash');
const avoider=(users)=>{
    l=[] //list to be avoided
    console.log("ulen",users.length);
    for(i=0;i<users.length;i++){
        console.log("bazinga");
        for(j=i+1;j<users.length;j++){
            if(l.indexOf(users[j].conference_id)!=-1){ //skip if already in list to be avoided
                continue;
            }
            console.log("bingo");
            if(users[i].conference_id==users[j].conference_id){//if same conference id or
                l.push(users[j].conference_id);
                continue;
            }
            console.log("bingo1");
            if(users[i].confName==users[j].confName){ //if same conference name or
                l.push(users[j].conference_id);
                continue;
            }
            console.log("bingo2");
            if((users[i].venue==users[j].venue)&& //if same venue and
                (
                    (users[i].user_id==users[j].user_id)|| //if same userid or
                    (users[i].searchTerms==users[j].searchTerms) //if same search terms
                )&&//and
                (
                    (users[i].confStartDate==users[j].confStartDate)|| //if same start date or
                    (users[i].confEndDate==users[j].confEndDate) //if same end date
                )
            )
            {
                l.push(users[j].conference_id); // add to list to be avoided
            }
            console.log("bingo3");
            

        }
    }
    console.log(l);
    return l;
 }
exports.prettysplit=(data)=>{
    //console.log(data);
    console.log(data.length);
    //const uniqueData=_.uniqWith(data, _.isEqual);
    const list=avoider(data);
    const users=data.map(user=>{
        //console.log(user.confName);
        //if(list.indexOf(user.conference_id)==-1)
        //{
            return ( 
                `<div>
                    <p>Conference Name: ${user.confName}</p>
                    <p>Keywords: ${user.searchTerms}</p>
                    <img src=${user.imgUrl}/>
                    <p>Venue: ${user.venue}</p>
                    <p>City: ${user.city}</p>
                    <p>Twitter Handle: ${user.twitter_handle}</p>
                    <p>${user.confStartDate} to ${user.confEndDate}</p>
                    <hr/>
                </div>`
            );
        //}
        //return undefined;
    });
    console.log(users.length);
    console.log(list.length);
    return users;
};