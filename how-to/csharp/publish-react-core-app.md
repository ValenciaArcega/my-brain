# Publish app with React & .NET Core

- Clean and build the whole solution
- Right click on the `.Server` project and select **Publish** option
- Select **publish as folder** and let the location as default, typically called `Publish`
- Open the final compiled folder and convert to `.zip` and move to the server
- Create a _new pool_ or _new site_ and let the project on that _new website_ with the port considering the firewall access to that port and also let the `static files` on a specific folder and point to that directory in the IIS manager configuration.
