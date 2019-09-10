
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { FileManager, Toolbar, NavigationPane, DetailsView, ContextMenu } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView, ContextMenu);


// initializing file manager  component
let hostUrl: string = 'http://localhost:62870/';
let fileObject: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/AmazonS3Provider/AmazonS3FileOperations',
        getImageUrl: hostUrl + 'api/AmazonS3Provider/AmazonS3GetImage',
        uploadUrl: hostUrl + 'api/AmazonS3Provider/AmazonS3Upload',
        downloadUrl: hostUrl + 'api/AmazonS3Provider/AmazonS3Download'
    }   
});
fileObject.appendTo('#filemanager');