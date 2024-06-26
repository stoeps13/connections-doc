# Customizing notifications sent as single emails {#t_customize_notifications .task}

You can customize the standard email messages that are sent by the applications in HCL Connections™, including the auto-generated notifications that are generated by the News application.

**Important:**

-   Starting from Connections 6.0 CR4, a new template version is provided and you can enable it by editing configuration. Go to [Enabling the new notification templates](../admin/t_admin_common_enable_template.md) for details.
-   Before making any customizations, first back up your original notifications folder. In addition, ensure that any customized files are backed up before performing a product upgrade or applying a cumulative refresh or fix pack, as you might need to merge your changes again manually after making updates.

The content of individual notifications is defined in templates that are processed by the FreeMarker engine. You can customize the content of notifications by modifying the existing template files or by replacing the files with custom templates that you create yourself. You can also modify the notification properties files to add custom strings to the templates and modify the images used in the notifications.

-   Customize the content of an email message by completing the following steps.
-   To customize an existing template file:

    1.  Locate the FreeMarker template that corresponds to the notification that you want to customize. For more information about the notification types used in HCL Connections, see [Customizing notifications](c_customize_notifications.md).

        Notifications are stored in the following location:

        ```
        [app\_server\_root](../plan/i_ovr_r_directory_conventions.md)/profiles/dm\_profile\_root/config/cells/cell\_name/LotusConnections-config/notifications/
        ```

        where app\_server\_root is the WebSphere® Application Server installation directory and dm\_profile\_root is the Deployment Manager profile directory, typically dmgr01.

        You can find folders for each application in this location and a shared resources folder. Look for the FreeMarker template for the notification that you want to customize in the relevant application folder. When you find the template that you want to modify, open the .ftl file in a text editor.

    2.  Make your customizations to the template as needed. For information about editing the templates, refer to the FreeMarker documentation on the following web page:

        [http://freemarker.sourceforge.net/docs/index.html](http://freemarker.sourceforge.net/docs/index.html)

        **Note:** The FreeMarker version currently used is 2.3.15.

    3.  Save your changes and then close the file.

    4.  Synchronize all the nodes using the Integrated Solutions Console.

    5.  Stop and restart the News application.

-   To edit the text strings used in the notification:

    1.  Using a text editor, open the notification\_language\_code.properties files in one of the following directories and make your changes:

        -   Application-specific strings:

            ```
            [app\_server\_root](../plan/i_ovr_r_directory_conventions.md)/profiles/dm\_profile\_root/config/cells/cell\_name/LotusConnections-config/notifications/application\_name/resources/nls
            ```

        -   Shared strings:

            ```
            [app\_server\_root](../plan/i_ovr_r_directory_conventions.md)/profiles/dm\_profile\_root/config/cells/cell\_name/LotusConnections-config/notifications/resources/nls
            ```

        Where language\_code is the locale of the language. For example, notification\_fr.properties.

        **Tip:** To see where each string that you are editing is used, look at the .ftl template files in the same directory and check the statements with the following format:

        ```
        u.resource("key")
        ```

        where `key` is the key of a translated string in the resource bundle notification\_language\_code.properties files.

        Note that the notification framework will look in the application-specific resources folder before moving to the shared strings in the shared resources folder.

    2.  Save your changes and then close the files.

    3.  Synchronize all the nodes using the Integrated Solutions Console.

    4.  Stop and restart the News application.

-   To customize the images used in the notification:

    1.  Locate the images in one of the following directories:

        -   Application-specific images:

            ```
            [app\_server\_root](../plan/i_ovr_r_directory_conventions.md)/profiles/dm\_profile\_root/config/cells/cell\_name/LotusConnections-config/notifications/application\_name/resources/images
            ```

        -   Shared images:

            ```
            [app\_server\_root](../plan/i_ovr_r_directory_conventions.md)/profiles/dm\_profile\_root/config/cells/cell\_name/LotusConnections-config/news/notifications/resources/images
            ```

        Note that the application-specific images are loaded before images in the shared location. If an image is loaded from the application-specific folder, the shared location is not checked for that image.

    2.  Replace any image that you want to customize with your own version using the same file name.

        The images are sent as MIME attachments to each email digest, so ensure that the image size is small.

    3.  Synchronize all the nodes using the Integrated Solutions Console.

    4.  Stop and restart the News application.

-   To customize the sender email used in notifications:

    1.  Follow the instructions in [Accessing the notification configuration file](../admin/t_admin_common_checkout_notification_config.md) to check out and open the /LotusConnections-config/notification-config.xml file.

        Each app source has a sender property. For example, the news app \(responsible for sending daily/weekly digests\) might have the sender property similar to this:

        ```
        <property name="sender">news-admin@example.com/property>
        
        ```

    2.  Change the email format and user name in the sender line to something more meaningful to the users.

        For example, if you change to the email format `"Firstname Lastname <user@example.com>"` your users will get a better sense of who the notification is coming from.

        ```
        <property name="sender">Firstname Lastname &lt;user@example.com&gt;</property>
        ```

        **Note:** Be sure to use escape characters `&lt;` and `&gt;` for the `<` and `>` characters in the email address.

    3.  Check in /LotusConnections-config/notification-config.xml and restart the News application for the changes to take effect.

        Users will then see the new sender address, such as <Renovations-Newsflash@example.com\> in the Sender field for notifications and the email digests.


-   **[Editing CR4 templates for single emails](../customize/r_example_edits_to_cr4_templates_for_single_emails.md)**  
HCL Connections™ CR4 offers new ways to customize the standard email messages that are sent by the applications in HCL Connections™, including the auto-generated notifications that are generated by the News application.

**Parent topic:**[Editing notification templates](../customize/t_edit_notification_templates_container.md)

**Related information**  


[Configuring notifications](../admin/t_admin_common_config_notification.md)

[Customizing email digests](../customize/t_customize_email_digests.md)

[Customizing shared resources for notifications \(default templates\)](../customize/t_customize_notification_resources.md)

