
/* jshint esversion: 6 */

app2.filter("title",()=>{
    return (str)=>{
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    };
});