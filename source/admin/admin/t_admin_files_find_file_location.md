# Finding the location of a stored file {#findingthelocationofafile .task}

Use the FilesUtilService.getFileById command to locate a file stored in a directory on a file system.

To use administrative commands, you must use the wsadmin client. See [Starting the wsadmin client](t_admin_wsadmin_starting.md) for details.

Files uploaded through the HCL Connections Files component are stored on a shared file system, as described in the topic *Installing HCL Connections 6.0*.

This command can be useful when restoring backup versions of data. See the topic *Backing up Files data* for more information.

1.  Start the wsadmin client.

2.  Start the Files Jython script interpreter using the following command:

    ```
    execfile("filesAdmin.py")
    ```

3.  Run the following command to locate a file stored in the following file directory:

    ```
    FilesUtilService.getFileById("fileId", "isRendition", "checkExistence")
    ```

    Where

    fileID is the ID of a file stored in the database. The ID must be a string in the following standard Universally Unique Identifier \(UUID\) format: 00000000-0000-0000-0000-000000000000.

    isRendition indicates whether or not the file that you want to locate is a rendition-type file. Rendition-type files are generated by the Files service from normal files uploaded by end users. Rendition files are used for previews, thumbnails, and so on. They are stored in a separate location.

    checkExistence indicates whether this command checks if the file exists or not. If the file doesn't exist, its location is not returned.

    For example, enter the following command:

    ```
    wsadmin>FilesUtilService.getFileById("00a29a17-7443-47d6-8099-3727c8956304", "true", "false")
    ```

    The command returns the file path as a string, even if the file is not in use:\[/nsf/IBM/Connections/data/shared/files/upload/files/renditions/86/124/00a29a17-7443-47d6-8099-3727c8956304\]


**Parent topic:**[Administering Files](../admin/c_admin_files_overview.md)

**Related information**  


[Installing HCL Connections 8.0](../install/t_install_cluster.md)

[Backing up Files data](../admin/t_admin_files_backup.md)

