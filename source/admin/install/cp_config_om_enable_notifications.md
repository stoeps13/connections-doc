# Configuring the Orient Me home page {#cp_config_om_enable_notifications .task}

Configure the Notification Center so it works in concert with the data that users prioritize on the Orient Me home page.

The following changes are required to enable the Notification Center tailored to work with the Orient Me home page. The Notification Center lets users view prioritized updates and track commitments for the day.

1.  On the WebSphere® deployment manager machine, start the wsadmin client as described in [Starting the wsadmin client](../admin/t_admin_wsadmin_starting.md).

2.  Run the following command to load the HCL Connections™ configuration file:

    ```
    `execfile("connectionsConfig.py")`
    ```

3.  Run the following command to check out Connections configuration files:

    ```
    LCConfigService.checkOutConfig("working\_directory","cell\_name")
    ```

    where:

    -   `working\_directory` is the temporary working directory to which configuration files are copied. The files are kept in this working directory while you edit them.
    -   `cell\_name` is the name of the WebSphere Application Server cell that hosts the Connections application. If you do not know the cell name, display it by typing the following command in the wsadmin client: `print AdminControl.getCell()`
    For example:

    -   AIX® or Linux®:

        ```
        LCConfigService.checkOutConfig("/opt/temp","foo01Cell01")
        ```

    -   Windows™:

        ```
        LCConfigService.checkOutConfig("c:/temp","foo01Cell01")
        ```

    Leave the wsadmin session open.

    **Important:** Files must be checked back into wsadmin during the same session in which they were checked out, so it is important that you leave the session open while editing the checked-out files in the following steps.

4.  From the `working\_directory` that you specified in the previous step, open the LotusConnections-config.xml for editing.

5.  Make the following changes to the LotusConnections-config.xml file:

    1.  Uncomment the `serviceReference` definition for Orient Me.

        Locate the following statement:

        ```
        <!--Uncomment the following serviceReference definition if OrientMe feature is enabled-->
        ```

        Uncomment the `sloc:serviceReference` section of code that follows it, replacing the string `admin_replace` with the appropriate values for your Connections deployment. For example:

        ```
        <!--Uncomment the following serviceReference definition if OrientMe feature is enabled-->
        <sloc:serviceReference serviceName="orient"
        enabled="true"
        ssl_enabled="true"
        bootstrapHost="connections_hostname.com"
        bootstrapPort="2809"
        clusterName="">
        <sloc:href>
        	<sloc:hrefPathPrefix>/social</sloc:hrefPathPrefix>
        	<sloc:static href="http://connections_hostname" ssl_href="https://connections_hostname" />
        	<sloc:interService href="https://connections_hostname" />
        </sloc:href>
        </sloc:serviceReference>
        ```

    2.  Enable the actioncenter property:

        Locate the following statement:

        ```
        <genericProperty name="actioncenter">disabled</genericProperty>
        ```

        and set it to enabled; for example:

        ```
        <genericProperty name="actioncenter">enabled</genericProperty>
        ```

        If the property does not exist, then create it.

    3.  Set Orient Me up as the default home page:

        Locate the following statement:

        ```
        <genericProperty name="com.ibm.orient.isOrientHomepage">false</genericProperty>
        ```

        and set it to `true`; for example:

        ```
        <genericProperty name="com.ibm.orient.isOrientHomepage">`true`</genericProperty>
        ```

        If the property does not exist, then create it.

    4.  \(Optional\) Disable the home page switcher.

        The menu option that allows users to switch between the Orient Me home page and the classic home page is enabled by default. If you wish to disable it, locate the `isHomepageSwitcherEnabled` property \(or create it is it does not exist\) and set it to `false`. For example:

        ```
        <genericProperty name="com.ibm.orient.isHomepageSwitcherEnabled">false</genericProperty>
        ```

6.  Save your changes to LotusConnections-config.xml.

7.  Add an enumeration value for the Orient Me service to the service names section in the service-location.xsd file.

    The new value should match the `serviceName` value for the `serviceReference` that you uncommented in step 5a; for example:

    ```
    <xsd:enumeration value="orient" />
    ```

8.  Save your changes to service-location.xsd.

9.  After you make changes, check the configuration files in by running the following command in the wsadmin session that you left open:

    ```
    LCConfigService.checkInConfig()
    ```

10. Stop and then restart the servers that host the Connections applications.


**Parent topic:**[Configuring the Orient Me component](../install/cp_config_om_intro.md)

