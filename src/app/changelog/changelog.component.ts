import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { PipeTransform, Pipe } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import {ChangeLogService} from './changelog.service';
import {Subscription} from 'rxjs';
// import { DragulaService } from 'ng2-dragula/ng2-dragula';
import {DragulaService} from 'ng2-dragula';
// import {MatDialog} from '@angular/material';


@Component({
    selector: 'app-changelog',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.scss', './src/modal_dialog.css'],
    providers: [DragulaService, ChangeLogService],
    encapsulation: ViewEncapsulation.None,
})

@Pipe({ name: 'safeHtml'})

export class ChangeLogComponent implements OnInit, AfterViewInit {

    /**
     *  declare the varriables
     * */
    // utils:ChangeLogService, private dragulaService:DragulaService
    subs = new Subscription();
    constructor(private dragulaService: DragulaService, private utils: ChangeLogService, private sanitizer: DomSanitizer) {
        dragulaService.createGroup('element-html', {

            copy: false,
            copySortSource: false,
            moves: function (el, source, handle, sibling) {
                // console.log('move', this.Email.elements);
                return $(handle).hasClass('move');
            },
            invalid: function (el, handle) {
                return false; // don't prevent any drags from initiating by default
            }
        });
        dragulaService.createGroup('element', {
            isContainer: function (el) {
                // console.log('iscontainer', el.classList.contains('email-container'));
                return el.classList.contains('email-container');
            },
            copy: true,
            copySortSource: false,
            removeOnSpill: true,
            moves: function (el, source, handle, sibling) {
                // console.log('move', !$(source).hasClass('email-container'));
                return !$(source).hasClass('email-container');
            },
            invalid: function (el, handle) {
                return false; // don't prevent any drags from initiating by default
            }
        });
        // drag
        this.subs.add(this.dragulaService.drag('element')
            .subscribe(({name, el, source}) => {
                // ...
                var elementType = $(el).attr('id');
                var element = $.extend(true, {}, this.defaultOptions[elementType]);
                var html = this.DevHtmlTemplate[(elementType + 'Template')];

                // var reTemp = $(el).css('list-style', 'none').html(html);
                // console.log('element.cloned', $(el), elementType, element, html);
                // return reTemp;
            })
        );
        this.subs.add(this.dragulaService.drop("element")
            .subscribe(({ name, el, target, source, sibling }) => {

                // if($(el))var elementType = $(el)[0].type;
                var elementType = el.attributes[0].value;

                var element = $.extend(true, {}, this.defaultOptions[elementType]);
                element.id = utils.uid();
                var index = $(sibling).index();

                // console.log('element.drop', $(el).find('li').prop('title'), el.attributes[0].value);
                $('.email-container li').remove();
                index == -1 ? this.Email.elements.push(element) : this.Email.elements.splice(index - 1, 0, element);
                utils.trackEvent('Elements', 'drop', element.type);

            })
        );
        this.subs.add(this.dragulaService.drop("element-html")
            .subscribe(({ name, el, target, source, sibling }) => {
                // ...
                var id = $(el).attr('id');
                var index = $(sibling).index();
                // console.log('element-html.drop',this.Email.elements);
                return;
                if (index == -1) {
                    index = this.Email.elements.length - 1;
                } else {
                    index--;
                }

                var element = this.utils.findWhere(this.Email.elements, {id: id});
                var oldIndex = this.Email.elements.indexOf(element);
                if (index >= this.Email.elements.length) {
                    var k = index - this.Email.elements.length;
                    while ((k--) + 1) {
                        this.Email.elements.push(undefined);
                    }
                }
                // console.log('element-html.drop',$(el), 'id',id, index);
            })
        );
        // some events have lots of properties, just pick the ones you need
        this.subs.add(this.dragulaService.dropModel("element")
            // WHOA
            // .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
                .subscribe(({ sourceModel, targetModel, item }) => {
                    // ...
                    // console.log('element.dropModel');
                })
        );
    }

    // public Editor = Editor;

    public editorConfig = {
        // extraPlugins: 'font',
        // fontSize_sizes:'8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px',
        // toolbar: [
        //     { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
        //     [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
        // ]
    }
    preview: boolean;
    currentLanguage: string;
    exportAsHtml: boolean;
    emailHtml: any;
    templatetitle: string;
    templatedescription:string;
    user:any = {
        email: '',
    }
    // currentElement: string;
    Email: any = {
        name: 'New Email',
        elements: [],
        html: '',
        emailSettings: {
            options: {
                paddingTop: "50px",
                paddingBottom: "50px",
                backgroundColor: "#cccccc"
            },
            type: 'emailSettings'
        }
    };

    people = ['one_people', 'two_people'];
    items = ['one_item', 'two_item'];
    side_elements = [
        {
            type: 'title',
            icon: 'title',
            primary_head: 'New Title',
            second_head: 'assets/title.PNG'
        },
        {
            type: 'divider',
            icon: '&#xE8E9;',
            primary_head: 'Devider',
            second_head: 'assets/devider.PNG'
        },
        {
            type: 'text',
            icon: '&#xE8EE;',
            primary_head: 'Text',
            second_head: 'assets/text.PNG'
        },
        {
            type: 'image',
            icon: '&#xE40B;',
            primary_head: 'Image',
            second_head: 'assets/image.PNG'
        },
        {
            type: 'button',
            icon: 'radio_button_checked',
            primary_head: 'Button',
            second_head: 'assets/button.PNG'
        },
        {
            type: 'imageTextInside',
            icon: '&#xE850;',
            primary_head: 'Image Inside Text',
            second_head: 'assets/imageinsidetext.PNG'
        },
        {
            type: 'imageTextRight',
            icon: 'burst_mode',
            primary_head: 'Image placed right to text',
            second_head: 'assets/lefttext.PNG'
        },
        { //&#xE060;
            type: 'imageTextLeft',
            icon: '&#xE060',
            primary_head: 'Image placed left to text',
            second_head: 'assets/righttext.PNG'
        },
        {
            type: 'imageText2x2',
            icon: 'pause',
            primary_head: '2 columns with 2 Images and Text',
            second_head: 'assets/2images.PNG'
        },
        {
            type: 'imageText3x2',
            icon: '&#xE8EC;',
            primary_head: '3 columns with 3 Images and Text',
            second_head: 'assets/3images.PNG'
        },
        {
            type: 'unsubscribe',
            icon: '&#xE157;',
            primary_head: 'Link with Label',
            second_head: 'assets/link.PNG'
        }
    ];
    display_elements = [
        {
            type: 'title',
            icon: 'title',
            primary_head: 'New Title',
            second_head: 'assets/title.PNG'
        },
        {
            type: 'divider',
            icon: '&#xE8E9;',
            primary_head: 'Devider',
            second_head: 'assets/devider.PNG'
        },
        {
            type: 'text',
            icon: '&#xE8EE;',
            primary_head: 'Text',
            second_head: 'assets/text.PNG'
        },
        {
            type: 'image',
            icon: '&#xE40B;',
            primary_head: 'Image',
            second_head: 'assets/image.PNG'
        },
        {
            type: 'button',
            icon: 'radio_button_checked',
            primary_head: 'Button',
            second_head: 'assets/button.PNG'
        },
        {
            type: 'imageTextInside',
            icon: '&#xE850;',
            primary_head: 'Image Inside Text',
            second_head: 'assets/imageinsidetext.PNG'
        },
        {
            type: 'imageTextLeft',
            icon: 'burst_mode',
            primary_head: 'Image placed right to text',
            second_head: 'assets/lefttext.PNG'
        },
        { //&#xE060;
            type: 'imageTextRight',
            icon: '&#xE060',
            primary_head: 'Image placed left to text',
            second_head: 'assets/righttext.PNG'
        },
        {
            type: 'imageText2x2',
            icon: 'pause',
            primary_head: '2 columns with 2 Images and Text',
            second_head: 'assets/2images.PNG'
        },
        {
            type: 'imageText3x2',
            icon: '&#xE8EC;',
            primary_head: '3 columns with 3 Images and Text',
            second_head: 'assets/3images.PNG'
        },
        {
            type: 'unsubscribe',
            icon: '&#xE157;',
            primary_head: 'Link with Label',
            second_head: 'assets/link.PNG'
        }
    ];
    tinymceOptions = {
        inline: false,
        skin: 'lightgray',
        theme: 'modern',
        plugins: ['advlist autolink lists link image charmap', 'searchreplace visualblocks code', 'insertdatetime media table contextmenu paste', 'textcolor'],
        toolbar: 'undo redo | styleselect mailchimpMergeTags | bold italic fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 24pt 36pt'
    };

    options = {
        type: 'ltr',
        primary_head: 'primay_head',
        second_head: 'second_head'
    };

    Email_elements = [
        {
            id: 'id1550170455924RAND14806',
            type: 'title',
            options: {
                align: 'center',
                title: 'New Title', // Enter your title here
                subTitle: 'New Title', // Subtitle
                padding: ['5px', '20px', '5px', '20px'],
                backgroundColor: '#fff',
                color: '#444444'
            }
        },
        {
            id: 'id1550170455924RAND14807',
            type: 'divider',
            options: {
                padding: ['15px', '20px', '0px', '20px'],
                backgroundColor: '#ffffff'
            }
        },
        {
            id: 'id1550170455924RAND14808',
            type: 'text',
            options: {
                padding: ['10px', '20px', '10px', '20px'],
                backgroundColor: '#ffffff',
                text: '<p style="margin:0 0 10px 0;line-height:22px;font-size:13px;" data-block-id="text-area">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
            }
        },
        {
            id: 'id1550170455924RAND14109',
            type: 'button',
            options: {
                align: 'center',
                padding: ['15px', '20px', '15px', '20px'],
                buttonText: 'New Button',
                url: '#',
                buttonBackgroundColor: '#3498DB',
                backgroundColor: '#ffffff'
            }
        },
        {
            id: 'id1550170455924RAND14101',
            type: 'image',
            options: {
                align: 'center',
                padding: ['15px', '20px', '15px', '20px'],
                width: '285',
                image: 'assets/350x150.jpg',
                backgroundColor: '#ffffff',

            }
        }
    ];
    defaultOptions = {
        'title': {
            type: 'title',
            options: {
                align: 'center',
                title: 'New Title', // Enter your title here
                subTitle: 'New Title', // Subtitle
                // padding: ['15px', '20px', '5px', '20px'],
                padding: '15px,20px,5px,20px',
                backgroundColor: '#fff',
                color: '#444444'
            }
        },
        'divider': {
            type: 'divider',
            options: {
                // padding: ['15px', '20px', '0px', '20px'],
                padding: '15px,20px,0px,20px',
                backgroundColor: '#ffffff'
            }
        },
        'text': {
            type: 'text',
            options: {
                // padding: ['10px', '20px', '10px', '20px'],
                padding: '10px,20px,10px,20px',
                backgroundColor: '#ffffff',
                text: '<p style="margin:0 0 10px 0;line-height:22px;font-size:13px;" data-block-id="text-area">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
            }
        },
        'button': {
            type: 'button',
            options: {
                align: 'center',
                // padding: ['15px', '20px', '15px', '20px'],
                padding: '15px,20px,15px,20px',
                buttonText: 'New Button',
                url: '#',
                buttonBackgroundColor: '#3498DB',
                backgroundColor: '#ffffff'
            }
        },
        'image': {
            type: 'image',
            options: {
                align: 'center',
                // padding: ['15px', '20px', '15px', '20px'],
                padding: '15px,20px,15px,20px',
                width: '285',
                image: 'assets/350x150.jpg',
                backgroundColor: '#ffffff',

            }
        },
        'imageTextInside': {
            type: 'imageTextInside',
            options: {
                // padding: ['15px', '20px', '15px', '20px'],
                padding: '15px,20px,15px,20px',
                image: 'assets/370x160.jpg',
                width: '285',
                backgroundColor: '#ffffff',
                text: '<p style="line-height: 22px;font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
            }
        },
        'imageTextRight': {
            type: 'imageTextRight',
            options: {
                // padding: ['15px', '20px', '15px', '20px'],
                padding: '15px,20px,15px,20px',
                image: 'assets/340x145.jpg',
                width: '285',
                backgroundColor: '#ffffff',
                text: '<table align="right" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
            }
        },
        'imageTextLeft': {
            type: 'imageTextLeft',
            options: {
                // padding: ['15px', '20px', '15px', '20px'],
                padding: '15px,20px,15px,20px',
                image: 'assets/340x145.jpg',
                width: '320',
                backgroundColor: '#ffffff',
                text: '<table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
            }
        },
        'imageText2x2': {
            type: 'imageText2x2',
            options: {
                // padding: ['15px', '20px', '15px', '20px'],
                padding: '15px,20px,15px,20px',
                image1: 'assets/255x154.jpg',
                image2: 'assets/255x154.jpg',
                width1: '255',
                width2: '255',
                backgroundColor: '#ffffff',
                text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>'
            }
        },
        'imageText3x2': {
            type: 'imageText3x2',
            options: {
                // padding: ['15px', '20px', '15px', '20px'],
                padding: '15px,20px,15px,20px',
                image1: 'assets/154x160.jpg',
                image2: 'assets/154x160.jpg',
                image3: 'assets/154x160.jpg',
                width1: '154',
                width2: '154',
                width3: '154',
                backgroundColor: '#ffffff',
                text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                text3: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt3">Easy To Use </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t3">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> '
            }
        },
        'unsubscribe': {
            type: 'unsubscribe',
            options: {
                // padding: ['10px', '20px', '10px', '50px'],
                padding: '10px,20px,10px,50px',
                backgroundColor: '#eeeeee',
                text: '<p style="text-align: center; margin: 0px 0px 10px 0px; line-height: 22px; font-size: 13px;" data-block-id="text-area"><span style="font-size: 8pt; color: #333333;">' + '_unsub_placeholder_default_text_' + '<span style="color: #0000ff;"> <a style="color: #0000ff;" href="*|UNSUB|*">' + '_unsub_placeholder_click_text' + '</a></span>.</span></p>'
            }
        }
    };
    DevHtmlTemplate =
        {
            'titleTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: {{element.options.backgroundColor}}" data-type="title">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" class="title" style="padding:{{ element.options.padding | arrToPadding  }}; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: {{element.options.color}}; line-height: 42px; font-size: 36px;" data-block-id="main-title">{{ element.options.title }}</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: {{element.options.color}}; line-height: 22px; font-size: 16px;" data-block-id="sub-title">{{ element.options.subTitle }}</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            // 'titleTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: '+ element.options.backgroundColor+'" data-type="title">\n    <tbody>\n    <tr>\n        <td align="' + element.options.align + '" class="title" style="padding:' + element.options.padding + '; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: ' + element.options.color + '; line-height: 42px; font-size: 36px;" data-block-id="main-title">' + element.options.title + '</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: ' + element.options.color + '; line-height: 22px; font-size: 16px;" data-block-id="sub-title">'+ element.options.subTitle + '</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'buttonTemplate': '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding: {{ element.options.padding | arrToPadding  }};" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="{{ element.options.align }}" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n                        <a style="background-color: {{element.options.buttonBackgroundColor}};color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="{{ element.options.url }}" data-default="1">{{ element.options.buttonText }}</a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'textTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  {{element.options.backgroundColor}}" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }}; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'unsubscribeTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }};text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'dividerTemplate': '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color: {{element.options.backgroundColor}};" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'imageTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="image">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" style="padding: {{ element.options.padding | arrToPadding  }};" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="{{element.options.width}}" alt="" src="{{ element.options.image }}" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'imageTextInsideTemplate': '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <ng-bind-html ng-bind-html="element.options.text | rawHtml"></ng-bind-html>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            //{'imageTextRightTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextRight">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td class="gap" width="30"></td>\n                    <td width="160">\n                        <img border="0" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 340px;padding:5px 5px 0 0;">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <table width="190">\n                <tbody>\n                <tr>\n                    <td class="text-block" data-ng-bind-html="element.options.text | rawHtml">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            'imageTextRightTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" class="container_wrap" style="display:inline;"> <table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
            'imageTextLeftTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap" style="display:inline;"> <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
            'imageText2x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
            // {'imageText3x2Template', '<table width="640" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageText3x2">\n    <tbody>\n    <tr>\n        <td class="image-caption" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table class="image-caption-container" align="left" border="0" cellpadding="0" cellspacing="0"\n                   width="350">\n                <tbody>\n                <tr>\n                    <td>\n                        <table class="image-caption-column" align="left" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image1 }}"\n                                         width="{{ element.options.width1 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text1 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <table class="image-caption-column" align="right" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td class="image-caption-top-gap" height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image2 }}"\n                                         width="{{ element.options.width2 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text2 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <table class="image-caption-column" align="right" border="0" cellpadding="0" cellspacing="0"\n                   width="160">\n                <tbody>\n                <tr>\n                    <td class="image-caption-top-gap" height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content image"\n                        style="font-family: Arial; font-size: 13px; color: #000000;">\n                        <img src="{{ element.options.image3 }}"\n                             width="{{ element.options.width3 }}"\n                             alt="" style="display: block;" align="2" border="0">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content text"\n                        style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                        align="left"\n                        data-ng-bind-html="element.options.text3 | rawHtml">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="5" width="100%"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            'imageText3x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="{{element.options.image3}}" border="0" alt="img" width="{{element.options.width3}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text3 | rawHtml" align="center"> </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
        };

    ng_include_function(element) {
        switch (element.type) {
            case 'title': {
                //statements;
                return '<table class = "title-table" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: ' + element.options.backgroundColor + '" data-type="title">\n    <tbody>\n    <tr>\n        <td align="' + element.options.align + '" class="title" style="padding:' + element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3] +';' + '; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: ' + element.options.color + '; line-height: 42px; font-size: 36px;" data-block-id="main-title">' + element.options.title + '</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: ' + element.options.color + '; line-height: 22px; font-size: 16px;" data-block-id="sub-title">' + element.options.subTitle + '</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'divider': {
                //statements;
                return '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color:'+ element.options.backgroundColor +';" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: '+ element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3] +';">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'button': {
                //statements;
                return '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:'
                    + element.options.backgroundColor
                    + '"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding:'
                    + element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3]
                    + '" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="'
                    + element.options.align
                    + '" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n              '
                    + ' <a style="background-color:'
                    + element.options.buttonBackgroundColor
                    +';color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="'
                    + element.options.url + '" data-default="1"><p style="font-size:15px">'
                    + element.options.buttonText + '</p></a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'text': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  ' + element.options.backgroundColor + '" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:'+ element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3] +'; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;">\n ' + element.options.text + ' </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }

            case 'image': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: ' + element.options.backgroundColor + ';" data-type="image">\n    <tbody>\n    <tr>\n        <td align="' + element.options.align + '" style="padding: '+ element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3] +';" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="' + element.options.width + '" alt="" src="' + element.options.image + '" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'imageTextInside': {
                //statements;
                return '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: ' + element.options.backgroundColor + ';" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: '+ element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3] +'; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="' + element.options.image + '"\n                             width="' + element.options.width + '"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <div [innerHtml =" ""'+ element.options.text +'</div>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'imageTextRight': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:' + element.options.backgroundColor + '" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: '
                    + element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3]
                    + ';min-width:100%;margin:0 auto;   center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> ' +
                    '<th align="left" class="container_wrap" style="display:inline;" >'
                    + element.options.text
                    +' </th> ' +
                    '<th align="right" class="container_wrap" > <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="' +
                    element.options.image + '" width="' + element.options.width + '" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> ' +
                    '</tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'imageTextLeft': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:'
                    + element.options.backgroundColor
                    + '" data-module="section_4" data-thumb="thumbnails/s4.png"> ' +
                    '<tbody> ' +
                    '<tr> <td align="center tbody1" style="padding: '
                    + element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3]
                    + ';min-width:100%;margin:0 auto;   center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;">' +
                    '<tbody class="tbody1"> <tr class="tbody2"> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> ' +
                    '<td align="center" class="container tbody3"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> ' +
                    '<tbody> <tr> <td class="container tbody4"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center tbody6"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> ' +
                    '<tbody> <tr class="tbody7"> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap tbody8" style="display:inline;"> <table align="left" width="280" class="container tbody9" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="right" class="container_wrap tbody10" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="'
                    + element.options.image
                    + '" width="'
                    + element.options.width + '" height="156" alt="img">  </td></tr></tbody> </table> </td></tr>' +
                    '</tbody> </table> </th> <th align="right" class="container_wrap tbody11" >'
                    + element.options.text
                    + ' </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td class = "tbody13" height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'imageText2x2': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:' + element.options.backgroundColor + '" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: '+ element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3] +';min-width:100%;margin:0 auto; background-color:' + element.options.backgroundColor + ') center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="'
                    + element.options.image1
                    + '" border="0" alt="img" width="'
                    + element.options.width1 + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" >'
                    + element.options.text1
                    +'  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="'
                    + element.options.image2 + '" border="0" alt="img" width="' + element.options.width2 + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center">'
                    + element.options.text2
                    + '  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'imageText3x2': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:' + element.options.backgroundColor + '" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: '+ element.options.padding.split(',')[0] + ' ' +  element.options.padding.split(',')[1] + ' '  + element.options.padding.split(',')[2] + ' ' +  element.options.padding.split(',')[3] +';min-width:100%;margin:0 auto; background-color:' + element.options.backgroundColor + ') center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="' + element.options.image1 + '" border="0" alt="img" width="'
                    + element.options.width1
                    + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" data-ng-bind-html="'
                    + element.options.text1
                    + '</td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="'
                    + element.options.image2
                    + '" border="0" alt="img" width="' + element.options.width2 + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" data-ng-bind-html="'
                    + element.options.text2
                    + '  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="'
                    + element.options.image3
                    + '" border="0" alt="img" width="'
                    + element.options.width3
                    + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" data-ng-bind-html="'
                    + element.options.text3
                    + ' </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'unsubscribe': {
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: '+element.options.backgroundColor+';" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:'
                    + element.options.padding.split(',')[0] + ' '
                    + element.options.padding.split(',')[1] + ' '
                    + element.options.padding.split(',')[2] + ' '
                    + element.options.padding.split(',')[3]
                    + ' ;text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;">' +
                    element.options.text +
                    '</td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
        }
    }

    currentElement: any = {
    };
    currentLocalStorage: string;
    // options: any = {
    //     align: 'center',
    //     title: 'New Title' // Enter your title here
    // }
    // options: any = {2: 'foo', 1: 'bar'};
    /**
     *  delare the functions
     * */
    ngOnInit() {
        this.currentLanguage = 'en';
        this.currentElement = false;
        this.preview = false;

        this.Email = JSON.parse(localStorage.getItem('Email')) || {
            name: 'New Email',
            elements: [],
            html: '',
            emailSettings: {
                options: {
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    backgroundColor: "#cccccc"
                },
                type: 'emailSettings',
            },
        }
        // console.log('email', this.Email);

        console.log('ngOnInit', this.Email);

        /**
         * Used to get the dragged question original position.
         */

    }
    onFileSelectec (event) {
        // console.log('event', event);
    }
    arrToPadding (array_p) {
        var str = "";
        for(var i = 0; i<4; i++) {
            str += array_p[i] + ";";
        }
        // console.log('str',array_p, str);
        return str;
    };

    onloadfunction(Email_element) {
        console.log('onload', Email_element);
    }

    /**
     *  dragdrop component
     / */
    drop(event: CdkDragDrop<string[]>) {
        // console.log('drop');
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    cdksideEnter(event: CdkDragDrop<string[]>) {
        console.log('side Enter', event);
    }

    cdkdashEnter(event: CdkDragDrop<string[]>) {
        console.log('clone', event.container.data);
    }

    /**
     /
     */
    elements_click() {
        console.log('elements_click');
    }

    drag_on(element_type) {
        console.log('drag_on', element_type);
    }

    // component functions
    closePreview() {
        this.preview = false;
        console.log(this.preview);
    }

    hasChanges () {
        return true;
    };

    saveEmailTemplate() {
        console.log('saveEmailTemplate');
        // localStorage.setItem('whatever', 'something');
        this.Email.html = this.utils.stripTags($('.builder .email-container').html(), this.Email);
        // console.log('this.Email', this.Email.html, "JSON"+JSON.stringify(this.Email));
        // $scope.Email = is what you need to save
        localStorage.setItem('Email',JSON.stringify(this.Email));
        this.currentLocalStorage = 'Email';
        this.currentElement = null;
        return true;
    }

    changeLanguage(lang: string) {
        if (lang === 'en') {
            this.currentLanguage = 'ru';
        } else if (lang === 'ru') {
            this.currentLanguage = 'en';
        }
        console.log(this.currentLanguage);
    }

    redirect() {
    }


    previewEmail() {
    }

    openExportContainer() {
        if (!this.Email.elements.length) return;
            // return this.utils.notify(utils.translate('nothing_to_export')).log();
        this.exportAsHtml = false;
        this.currentElement = 'export';
        this.changeHtml();
    }
    changeHtml() {
        console.log('changeHtml', this.emailHtml, this.utils.stripTags($('.builder .email-container').html(), this.Email));
        this.emailHtml = this.utils.removeLineBreaks(this.utils.stripTags($('.builder .email-container').html(), this.Email));
    }

    desktoppreview() {
        var w = window.open("", "", "width=850, height=660");
        // console.log('desktoppreview', w, $('.builder .email-container').html(), this.Email);
        w.document.write(this.utils.removeLineBreaks(this.utils.stripTags($('.builder .email-container').html(), this.Email)));
    }
    mobilepreview(){
        var w = window.open("", "", "width=360, height=640");
        // console.log('desktoppreview', w, $('.builder .email-container').html(), this.Email);
        w.document.write(this.utils.removeLineBreaks(this.utils.stripTags($('.builder .email-container').html(), this.Email)));
    }

    m_settings( setting_value) {
        return true;
    }
    editElement(id) {
        // if(this.preview) return;
        // console.log('editeElement_id', id,'preview', this.preview, 'email_elements', this.Email.elements,'currentElement', this.currentElement,'utils', this.utils, 'Email', this.Email);
        if (this.preview) return;
        this.currentElement = id != 'emailSettings' ? this.utils.findWhere(this.Email.elements, {id: id}) : this.Email[id];
        // console.log('id',this.preview, id, this.Email);
        this.currentElement && this.utils.trackEvent('Email', 'edit', this.currentElement.type);
        // console.log('editeElement_id', id,'preview', this.preview, 'email_elements', this.Email.elements,'currentElement', this.currentElement,'utils', this.utils, 'Email', this.Email);
     }
    trackByFn(index: any, item: any) {
        return index;
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    getTemplate(type) {
        // return this.defaultOptions[type];

        var htmlcode = this.ng_include_function(type);
        var reVal, boFlag;
        reVal = this.sanitizer.bypassSecurityTrustHtml(htmlcode);
        // setTimeout(reVal = this.sanitizer.bypassSecurityTrustHtml(htmlcode), 1000);
        return reVal;
    }

    removeElement(id) {
        var el = this.utils.findWhere(this.Email.elements, {id: id});
        this.Email.elements.splice(this.Email.elements.indexOf(el), 1);
        // console.log('removeElement','currentitem', this.currentElement, 'preview', this.preview, id, this.Email_elements, el);
        this.utils.trackEvent('Elements', 'remove', el.type);
        this.currentElement = undefined;
        this.currentElement = false;


    }
    InputFileChange (event: EventTarget, id) {
        console.log('inputfilechange', event[0].name);
        // this.currentElement.options[id] = event[0].name;
    }
    paddingChange (padding_val, ikey, i) {

        var paddingArray = this.currentElement.options[ikey].split(',');
        var tmp = "";
        for (var k =0; k<4; k++){
            if(k === i) {
                if(k) tmp += ' ,';
                tmp += padding_val;
            }else {
                if(k) tmp += ' ,';
                tmp += paddingArray[k];
            }
        }
        this.currentElement.options[ikey] = tmp;
        // console.log('paddingChange', tmp, paddingArray, this.currentElement.options[ikey]);
        // this.currentElement.options[item.key]
    }
    sideSave () {
        // console.log('saveEmailTemplate');
        // localStorage.setItem('whatever', 'something');
        this.Email.html = this.utils.stripTags($('.builder .email-container').html(), this.Email);
        // console.log('this.Email', this.Email.html, "JSON"+JSON.stringify(this.Email));
        // $scope.Email = is what you need to save
        localStorage.setItem('Email',JSON.stringify(this.Email));
        this.currentLocalStorage = 'Email';
        // this.currentElement = null;
        return true;
    }
    cloneElement(id) {
        var el = this.utils.findWhere(this.Email.elements, {id: id});
        var newEl = JSON.parse(JSON.stringify(el));
        newEl.id = this.utils.uid();
        this.utils.trackEvent('Elements', 'clone', newEl.type);
        this.Email.elements.splice(this.Email.elements.indexOf(el) + 1, 0, newEl);

        console.log('==>', this.Email);
        // setTimeout(function () {
        //     $( ".resizable" ).resizable();
        // },100);
        // console.log('cloneElement', el, 'newEl', newEl, 'newEl.id', newEl.id);
    }

    liChangeFunction() {
        // console.log('lichange',this.elements);
    }
    closemodel () {
        $(".ng7-modal").fadeOut("slow");
    }
    openmodel() {
        // console.log('openmodel', $(".ng7-modal"));
        $(".ng7-modal").fadeIn();
    }
    saveAsTemplate() {
        $(".ng7-addtemplatemsg").slideDown("slow");
        console.log("Successfull");
        setTimeout(function () {

            $(".ng7-modal").fadeOut("slow");
            $(".ng7-addtemplatemsg").hide();
        },2500);
        var templateobj={
            "title":this.templatetitle,
            "description":this.templatedescription,
            // "createdate":xdate(),
            // "createtime":xtime(),
            "filename":this.utils.uid('export'),
            "html":JSON.stringify(this.Email)
        };
    }
    exportEmailAsJson() {
        var a = document.createElement('a');
        a.target = '_blank';
        this.utils.trackEvent('Email', 'export', 'JSON');
        a.href = 'data:attachment/json,' + encodeURI(JSON.stringify(this.Email));
        a.download = this.utils.uid('export') + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    downloadHtml() {
        var a = document.createElement('a');
        a.target = '_blank';
        this.utils.trackEvent('Email', 'export', 'HTML');
        a.href = 'data:attachment/html,' + encodeURI(this.emailHtml);
        a.download = this.utils.uid('export') + '.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    stripTags(html, email) {

        email = email || {}; // I know, is ugly, but is supported in es5
        var el = document.createElement('html');

        // $(el).html(self.utils.removeLineBreaks(html));
        //
        // $(el).find('body').css({
        //     'background': email.emailSettings.options.backgroundColor,
        //     'padding': email.emailSettings.options.paddingTop + ' 0 ' + email.emailSettings.options.paddingBottom
        // });
        //
        // if (!$(el).find('head meta[http-equiv="Content-Type"]').length) {
        //     $(el).find('head').append($('<meta/>', {
        //         'http-equiv': 'Content-Type',
        //         'content': 'text/html; charset=UTF-8'
        //     }));
        //     $(el).find('head').append("<meta name=\"viewport\" content=\"width=device-width\"><link href='https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' rel='stylesheet' type='text/css'><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style>");
        // }
        //
        // if (!$(el).find('head title').length) {
        //     $(el).prepend('<title>' + email.name + '</title>')
        // } else {
        //     $(el).find('head title').text(email.name)
        // }
        //
        // if (email.mailchimpHead && variables.includeMailchimp.enable && variables.includeMailchimp.mergeTagsInHead) {
        //     if (!$(el).find('head meta[property="og:title"]').length) {
        //         $(el).find('head').append($('<meta/>', {
        //             'property': 'og:title',
        //             'content': '*|MC:SUBJECT|*'
        //         }));
        //     }
        // } else if (!email.mailchimpHead || !variables.includeMailchimp.enable || !variables.includeMailchimp.mergeTagsInHead) {
        //     $(el).find('head meta[property="og:title"]').remove();
        // }
        //
        // if (email.mailchimpHeaderFooter && variables.includeMailchimp.enable && variables.includeMailchimp.includeStandardHeaderAndFooter) {
        //     $(el).find('table[data-type]:first').prepend("<tr id=\"templatePreheader\">\n    <td valign=\"top\" class=\"preheaderContent\">\n\n        <!-- // Begin Module: Standard Preheader \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td valign=\"top\">\n                    <div mc:edit=\"std_preheader_content\">\n                        Use one or two sentences in this area to offer a teaser of your email\'s content. Text here will show in a preview area in some email clients.\n                    </div>\n                </td>\n                <td valign=\"top\" width=\"180\">\n                    <div mc:edit=\"std_preheader_links\">\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->Is this email not displaying correctly?<br><a href=\"*|ARCHIVE|*\" target=\"_blank\">View it in your browser</a>.<!-- *|END:IF|* -->\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Preheader \\\\ -->\n\n    </td>\n</tr>")
        //     $(el).find('table[data-type]:last').append("<tr id=\"templateFooter\">\n    <td valign=\"top\" class=\"footerContent\">\n\n        <!-- // Begin Module: Standard Footer \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"social\">\n                    <div mc:edit=\"std_social\">\n                        &nbsp;<a href=\"*|TWITTER:PROFILEURL|*\">follow on Twitter</a> | <a href=\"*|FACEBOOK:PROFILEURL|*\">friend on Facebook</a> | <a href=\"*|FORWARD|*\">forward to a friend</a>&nbsp;\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td valign=\"top\" width=\"370\">\n                    <br>\n                    <div mc:edit=\"std_footer\">\n                        *|IF:LIST|*\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        *|LIST:DESCRIPTION|*\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|HTML:LIST_ADDRESS_HTML|*\n                        <br>\n                        <!-- *|END:IF|* -->\n                        *|ELSE:|*\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|USER:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|USER:ADDRESS_HTML|*\n                        <!-- *|END:IF|* -->\n                        *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n                <td valign=\"top\" width=\"170\" id=\"monkeyRewards\">\n                    <br>\n                    <div mc:edit=\"monkeyrewards\">\n                        *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"utility\">\n                    <div mc:edit=\"std_utility\">\n                        &nbsp;<a href=\"*|UNSUB|*\">unsubscribe from this list</a> | <a href=\"*|UPDATE_PROFILE|*\">update subscription preferences</a><!-- *|IFNOT:ARCHIVE_PAGE|* --> | <a href=\"*|ARCHIVE|*\">view email in browser</a><!-- *|END:IF|* -->&nbsp;\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Footer \\\\ -->\n\n    </td>\n</tr>")
        // } else if (!email.mailchimpHeaderFooter || !variables.includeMailchimp.enable || !variables.includeMailchimp.includeStandardHeaderAndFooter) {
        //     $(el).find('table').find('#templateFooter, #templatePreheader').remove()
        // }
        //
        // $(el).find('i.actions').each(function() {
        //     $(this).remove();
        // });
        // $(el).find('ng-include, div.builder-element, [ng-bind-html]').each(function() {
        //     console.log('ng-include',$(this).contents() );
        //     $(this).replaceWith($(this).contents());
        // });
        // $(el).contents().contents().addBack().filter(function() {
        //     return this.nodeType == Node.COMMENT_NODE;
        // }).remove();
        // return $(el)[0].outerHTML;
    }

    side_bar_function(currentElement) {
        // console.log('side_bar_function', currentElement);
    }
}

@Component({
    selector: 'app-device',
    template: `
        <div>dfdsfd</div>`,
})
class DeviceComponent {
}
