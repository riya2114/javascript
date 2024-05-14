const PhoneBook={
    contact_list:[],
    addContact: function(name, number, email){
        this.contact_list.push({name,number,email});
        console.log(`${name}, ${number} and ${email} is added in phone book`);
    },
    updateContact: function(name, newName, newNumber, newEmail){
        let check=this.contact_list.find(check=>check.name===name);
        if(check){
            check.name=newName;
            check.number=newNumber;
            check.email=newEmail;
            console.log(`${newName}, ${newNumber} and ${newEmail} are updated in phoneBook`);
        }
        else{
            console.log("contact not found");
        }
    },
    searchContact: function(name){
        let search=this.contact_list.find(search=>search.name===name);
        if(search){
            console.log(`name: ${search.name},number: ${search.number}, email: ${search.email} are searched`);
        }
        else{
            console.log(`contact with this ${name} not found`);
        }
    },
    deleteContact: function(name){
        let del=this.contact_list.findIndex(del=>del.name===name);
        if(del!==-1){
            this.contact_list.splice(del,1);
            console.log(`${name} contact delete from the phonBook`);
        }
        else{
            console.log(`${name} of this contact not found in phoneBook`);
        }
    }
};
PhoneBook.addContact("Riya", 8882986768, "riya22@navgurukul.org");
PhoneBook.updateContact("Riya","Aman", 8948400171, "amansingh606065@gmail.com");
PhoneBook.searchContact("Aman");
PhoneBook.deleteContact("Aman");
// PhoneBook.searchContact("Aman");