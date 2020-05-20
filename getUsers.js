const {avoider} =require('./logic');
 
exports.prettysplit=(data)=>{
    const list=avoider(data);
    const users=data.map(user=>{
        if(list.indexOf(user.conference_id)==-1) //if user not in duplicate list then send his/her data
        {
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
                </div>`//added these data only as more data could be added as per need and this is more of a front end job
            );
        }
    });
    return users;
};

exports.duplicate=(data)=>{
    const list=avoider(data);
    const users=data.map(user=>{
        //console.log(user.confName);
        if(list.indexOf(user.conference_id)!=-1)//if user is in the list of duplicate then send the data
        {
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
        }
    });
    return users;
};