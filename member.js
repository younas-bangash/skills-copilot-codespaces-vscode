function skillsMember() {
    let skills = ['html', 'css', 'js', 'php', 'mysql'];
    let member = {
        name: 'Nguyen Van A',
        age: 20,
        address: 'Ha Noi',
        skills: skills,
        showInfo: function () {
            console.log('Name: ' + this.name);
            console.log('Age: ' + this.age);
            console.log('Address: ' + this.address);
            console.log('Skills: ' + this.skills);
        }
    };
    console.log('Name: ' + member.name);
    console.log('Age: ' + member.age);
    console.log('Address: ' + member.address);
    console.log('Skills: ' + member.skills);
    member.showInfo();
}