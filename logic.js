l=[] //list to be avoided
for(i=0;i<users.length;i++){
    for(j=i+1;j<users;j++){
        if(l.indexOf(users.conference_id[j])!=-1){ //skip if already in list to be avoided
            break;
        }
        if(
            (users[i].conference_id===users[j].conference_id)|| //if same conference id or
            (user[i].confName==user[j].confName)|| //if same conference name or
            (
                (user[i].venue==user[j].venue)&& //if same venue and
                (
                    (user[i].userid==user[j].userid)|| //if same userid or
                    (user[i].searchTerms==user[j].searchTerms) //if same search terms
                )&&//and
                (
                    (user[i].confStartDate==user[j].confStartDate)|| //if same start date or
                    (user[i].confEndDate==user[j].confEndDate) //if same end date
                )
            )
        ){
            l.push(users.conference_id[j]); // add to list to be avoided
            break;
        }   
    }
}