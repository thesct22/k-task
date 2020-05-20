const _ = require('lodash');


exports.prettysplit=(data)=>{
    console.log(data);
    const users=data.map(user=>{
        //console.log(user.confName);
        return(
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
    });
    return users;
};