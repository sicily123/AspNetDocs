function BuildPerson()
{
 var person =
 {
 FirstName: $get("txtFirstName").value,
 LastName: $get("txtLastName").value,
 Address:
 {
 Street: $get("txtStreet").value,
 City: $get("txtCity").value,
 State: $get("txtState").value
 }
 };
 if (window.debugService)
 {
 window.debugService.trace("Person name: " + person.LastName);
 }
 UpdatePerson(person);
}