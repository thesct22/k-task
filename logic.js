exports.avoider=(users)=>{
    l=[] //list to be avoided
    for(i=0;i<users.length;i++){
        for(j=i+1;j<users.length;j++){
            if(l.indexOf(users[j].conference_id)!=-1){ //skip if already in list to be avoided
                continue;
            }
            if(users[i].conference_id==users[j].conference_id){//if same conference id or
                l.push(users[i].conference_id);
                l.push(users[j].conference_id);
                continue;
            }
            if(users[i].confName==users[j].confName){ //if same conference name or
                l.push(users[i].conference_id);
                l.push(users[j].conference_id);
                continue;
            }
            if((users[i].venue==users[j].venue)&& //if same venue and
                (users[i].searchTerms==users[j].searchTerms)&& //if same search terms and
                (
                    (users[i].confStartDate==users[j].confStartDate)|| //if same start date or
                    (users[i].confEndDate==users[j].confEndDate) //if same end date
                )
            )
            {
                l.push(users[i].conference_id);
                l.push(users[j].conference_id); // add to list to be avoided
            }
        }
    }
    return l;//returns the list with duplicates
 }