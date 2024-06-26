# Setting the default dictionary {#t_admin_search_set_default_dictionary .task}

Use administrative commands to set the default dictionary used for Search query strings.

When using administrative commands, you must use the IBM® WebSphere® Application Server wsadmin client. See [Starting the wsadmin client](t_admin_wsadmin_starting.md) for details.

You use the setDefaultDictionary command to set the default dictionary used for Search queries. At indexing time, when content is analyzed, an attempt is made to guess which of the enabled IBM LanguageWare® dictionaries should be used when applying the text analysis process. If the attempt is unsuccessful or if the language guessed does not have a corresponding dictionary enabled, the default dictionary is used.

The default dictionary is also used at search time. Language guessing is not used at search time to determine which dictionary is used for text analysis, the language is specified as part of the HTTP request. If there is a problem loading the dictionary corresponding to the language specified or if there is no corresponding dictionary enabled, then the default dictionary is used.

1.  To specify a default dictionary for use with Search, complete the following steps.
2.  Start the wsadmin client from one of the following directories on the system on which you installed the Deployment Manager:

    Linux: `[app\_server\_root](../plan/i_ovr_r_directory_conventions.md)\profiles\dm\_profile\_root\bin`

    Windows: `[app\_server\_root](../plan/i_ovr_r_directory_conventions.md)/profiles/dm\_profile\_root/bin`

    where app\_server\_root is the WebSphere Application Server installation directory and dm\_profile\_root is the Deployment Manager profile directory, typically dmgr01.

    You must start the client from this directory or subsequent commands that you enter do not execute correctly.

3.  After the wsadmin command environment has initialized, enter the following command to initialize the Search environment and start the Search script interpreter:

    ```
    execfile("searchAdmin.py")
    ```

    If prompted to specify a service to connect to, type 1 to pick the first node in the list. Most commands can run on any node. If the command writes or reads information to or from a file using a local file path, you must pick the node where the file is stored.

    When the command is run successfully, the following message displays:

    ```
    Search Administration initialized
    ```

4.  Check out the Search cell-level configuration file, search-config.xml, with the following command:

    SearchCellConfig.checkOutConfig\("working\_dir", "cellName"\)

    Where:

    -   working\_dir is the temporary directory to which you want to check out the cell level configuration file. This directory must exist on the server where you are running the wsadmin client. Use forward slashes to separate directories in the file path, even if you are using the Microsoft Windows operating system.

        **Note:** AIX, and Linux only: The directory must grant write permissions or the command does not run successfully.

    -   cellName is the name of the cell that the Search node belongs to. The command is case-sensitive. If you do not know the cell name, you can determine it by typing the following command in the wsadmin command processor:

        print AdminControl.getCell\(\)

    For example:

    ```
    SearchCellConfig.checkOutConfig("c:/search_temp", "SearchServerNode01Cell")
    ```

5.  To set the default dictionary, use the following command:

    SearchCellConfig.setDefaultDictionary\(String languageCode\)
    :   Configures the default LanguageWare dictionary used by the Search application. The default dictionary must be one of the enabled dictionaries.

        This command takes a single argument:

        -   languageCode is the language code for the dictionary that you want to set as the default.

            This language code typically comprises two letters conforming to the ISO standard 639-1:2002 that identifies the primary language of the dictionary. However, there are some codes that additionally define a country or variant, in which case these constituent parts are separated by an underscore. For example, Portuguese has two variants, one for Portugal \(pt\_PT\) and one for Brazil \(pt\_BR\). When using a code that also specifies a country, ensure that you use an underscore to separate the language code and the country code rather than a hyphen; otherwise an error will be generated.

            **Note:** A matching dictionary must exist in the list of configured dictionaries for the language that you specify as a parameter.

        For example:

        ```
        SearchCellConfig.setDefaultDictionary("fr")
        ```

6.  Check in the updated search-config.xml configuration file using the following wsadmin client command:

    SearchCellConfig.checkInConfig\(\)

7.  To exit the wsadmin client, type exit at the prompt.

8.  Stop the server or servers hosting the Search application, and then restart the Search servers.

    The next time the scheduled task runs, persisted seedlists are retained after indexing finishes.


**Parent topic:**[Configuring dictionaries for Search](../admin/c_admin_search_configure_dictionaries.md)

**Related information**  


[Search language dictionaries](../admin/r_admin_search_dictionaries.md)

[Listing enabled dictionaries](../admin/t_admin_search_list_dictionary.md)

[Disabling dictionaries](../admin/t_admin_search_delete_dictionary.md)

