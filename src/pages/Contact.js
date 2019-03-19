export default function Contact(){
    return `
    <form action="https://formspree.io/engelman12990@gmail.com" method="POST">
    <fieldset>
      <label for="fname">First Name</label> <br>
      <input type="text" name="fname" id="fname" required><br>

      <label for="lname">Last Name</label><br>
      <input type="text" name="lname" id="lname" required><br>

      <label for="email">Email</label><br>
      <input type="email" name="email" id="email" required><br>

      <label for="password">Password</label><br>
      <input type="password" name="password" required><br>

      <label for="fone">Phone</label><br>
      <input type="tel" name="fone" id="fone"><br><br>

      <textarea name="msg" id="msg" cols="30" rows="10"
        placeholder="Please enter your message here"></textarea><br>

      <input type="submit" value="Submit">
      <input type="reset" value="Clear">
    </fieldset>
  </form>`;
}