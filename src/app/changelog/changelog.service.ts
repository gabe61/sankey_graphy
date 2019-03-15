import { Injectable } from '@angular/core';
// import alertify from 'alertify.js';

@Injectable({
  providedIn: 'root'
})
export class ChangeLogService {


    $filter:any;
    variables:any;

    constructor() {
        this.variables = {
            urlToUploadImage: '//uploads.im/api',
            trackEvents: true, // You need to add google analytics in index.html
            includeMailchimp: {
                enable: true,
                mergeTagsInTinymce: true,
                mergeTagsInHead: true,
                includeStandardHeaderAndFooter: true
            }
        }
    }

    translate(key_to_translate, additional_data) {
        return key_to_translate;
    }
    /**
     * Convert string from snake to camel
     * @param str
     * @returns {*}
     */
    snakeToCamel(str) {
        if (typeof str !== 'string')  return str;
        return str.replace(/_([a-z])/gi, function(m, w) {
            return "" + w.toUpperCase();
        });
    }
    /**
     * Convert camel to snake
     * @param str
     * @returns {*}
     */
    camelToSnake(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/([A-Z])/g, function(m, w) {
            return "_" + w.toLowerCase();
        });
    }
    /**
     * Generate random id
     * @param prefix
     * @returns {string}
     */
    uid(prefix = 'id') {
        return (prefix || 'id') + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
    }
    /**
     * https://gist.github.com/aaronmccall/9751450
     * @param list
     * @param props
     * @returns {*}
     */
    findWhere(list, props) {
        var idx = 0;
        var len = list.length;
        var match = false;
        var item, item_k, item_v, prop_k, prop_val;
        for (; idx < len; idx++) {
            item = list[idx];
            for (prop_k in props) {
                // If props doesn't own the property, skip it.
                if (!props.hasOwnProperty(prop_k)) continue;
                // If item doesn't have the property, no match;
                if (!item.hasOwnProperty(prop_k)) {
                    match = false;
                    break;
                }
                if (props[prop_k] === item[prop_k]) {
                    // We have a match…so far.
                    match = true;
                } else {
                    // No match.
                    match = false;
                    // Don't compare more properties.
                    break;
                }
            }
            // We've iterated all of props' properties, and we still match!
            // Return that item!
            if (match) return item;
        }
        // No matches
        return null;
    }
    /**
     * Strip email html for unnecessary attributes, classes ...
     * @param html
     * @param email
     * @returns {string|*|Object|string|string}
     */
    stripTags(html, email) {
        email = email || {}; // I know, is ugly, but is supported in es5
        var el = document.createElement("html");
        console.log('strip email', email, el);
        $(el).html(this.removeLineBreaks(html));

        $(el).find('body').css({
            'background': email.emailSettings.options.backgroundColor,
            'padding': email.emailSettings.options.paddingTop + ' 0 ' + email.emailSettings.options.paddingBottom
        });

        if (!$(el).find('head meta[http-equiv="Content-Type"]').length) {
            $(el).find('head').append($('<meta/>', {
                'http-equiv': 'Content-Type',
                'content': 'text/html; charset=UTF-8'
            }));
            $(el).find('head').append("<meta name=\"viewport\" content=\"width=device-width\"><link href='https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' rel='stylesheet' type='text/css'><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style>");
        }

        if (!$(el).find('head title').length) {
            $(el).prepend('<title>' + email.name + '</title>')
        } else {
            $(el).find('head title').text(email.name)
        }

        if (email.mailchimpHead &&  this.variables.includeMailchimp.enable &&  this.variables.includeMailchimp.mergeTagsInHead) {
            if (!$(el).find('head meta[property="og:title"]').length) {
                $(el).find('head').append($('<meta/>', {
                    'property': 'og:title',
                    'content': '*|MC:SUBJECT|*'
                }));
            }
        } else if (!email.mailchimpHead || ! this.variables.includeMailchimp.enable || ! this.variables.includeMailchimp.mergeTagsInHead) {
            $(el).find('head meta[property="og:title"]').remove();
        }

        if (email.mailchimpHeaderFooter &&  this.variables.includeMailchimp.enable &&  this.variables.includeMailchimp.includeStandardHeaderAndFooter) {
            $(el).find('table[data-type]:first').prepend("<tr id=\"templatePreheader\">\n    <td valign=\"top\" class=\"preheaderContent\">\n\n        <!-- // Begin Module: Standard Preheader \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td valign=\"top\">\n                    <div mc:edit=\"std_preheader_content\">\n                        Use one or two sentences in this area to offer a teaser of your email\'s content. Text here will show in a preview area in some email clients.\n                    </div>\n                </td>\n                <td valign=\"top\" width=\"180\">\n                    <div mc:edit=\"std_preheader_links\">\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->Is this email not displaying correctly?<br><a href=\"*|ARCHIVE|*\" target=\"_blank\">View it in your browser</a>.<!-- *|END:IF|* -->\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Preheader \\\\ -->\n\n    </td>\n</tr>")
            $(el).find('table[data-type]:last').append("<tr id=\"templateFooter\">\n    <td valign=\"top\" class=\"footerContent\">\n\n        <!-- // Begin Module: Standard Footer \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"social\">\n                    <div mc:edit=\"std_social\">\n                        &nbsp;<a href=\"*|TWITTER:PROFILEURL|*\">follow on Twitter</a> | <a href=\"*|FACEBOOK:PROFILEURL|*\">friend on Facebook</a> | <a href=\"*|FORWARD|*\">forward to a friend</a>&nbsp;\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td valign=\"top\" width=\"370\">\n                    <br>\n                    <div mc:edit=\"std_footer\">\n                        *|IF:LIST|*\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        *|LIST:DESCRIPTION|*\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|HTML:LIST_ADDRESS_HTML|*\n                        <br>\n                        <!-- *|END:IF|* -->\n                        *|ELSE:|*\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|USER:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|USER:ADDRESS_HTML|*\n                        <!-- *|END:IF|* -->\n                        *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n                <td valign=\"top\" width=\"170\" id=\"monkeyRewards\">\n                    <br>\n                    <div mc:edit=\"monkeyrewards\">\n                        *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"utility\">\n                    <div mc:edit=\"std_utility\">\n                        &nbsp;<a href=\"*|UNSUB|*\">unsubscribe from this list</a> | <a href=\"*|UPDATE_PROFILE|*\">update subscription preferences</a><!-- *|IFNOT:ARCHIVE_PAGE|* --> | <a href=\"*|ARCHIVE|*\">view email in browser</a><!-- *|END:IF|* -->&nbsp;\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Footer \\\\ -->\n\n    </td>\n</tr>")
        } else if (!email.mailchimpHeaderFooter || ! this.variables.includeMailchimp.enable || ! this.variables.includeMailchimp.includeStandardHeaderAndFooter) {
            $(el).find('table').find('#templateFooter, #templatePreheader').remove()
        }

        $(el).find('i.actions').each(function() {
            $(this).remove();
        });
        $(el).find('ng-include, div.builder-element, [ng-bind-html]').each(function() {
            console.log('ng-include',$(this).contents() );
            // $(this).replaceWith($(this).contents());
        });
        $(el).contents().contents().addBack().filter(function() {
            return this.nodeType == Node.COMMENT_NODE;
        }).remove();
        return $(el)[0].outerHTML;
    }
    /**
     * Notify
     * @param msg
     * @param callback
     * @returns {{log: utils.log, success: utils.success, error: utils.error}}
     */

    notify (msg, callback) {
        return alert(msg);
        // return {
        //     log {
        //         return alertify.log(msg, callback)
        //     },
        //     success: function() {
        //         alertify.success(msg, callback)
        //     },
        //     error: function() {
        //         alertify.error(msg, callback)
        //     }
        // }
    }
    /**
     * Confirm dialog
     * @param msg
     * @param succesFn
     * @param cancelFn
     * @param okBtn
     * @param cancelBtn
     * @returns {IAlertify}
     */
    confirm (msg, succesFn, cancelFn, okBtn, cancelBtn) {
        return alert(msg);
        // return alertify
        //     .okBtn(okBtn)
        //     .cancelBtn(cancelBtn)
        //     .confirm(msg, succesFn, cancelFn)
    }
    /**
     * Alert dialog
     * @param msg
     * @returns {IAlertify}
     */
    alert (msg) {
        return alert(msg);
        // return alertify
        //     .okBtn("Accept")
        //     .alert(msg)
    }
    /**
     * Prompt dialog
     * @param defaultvalue
     * @param promptMessage
     * @param successFn
     * @param cancelFn
     * @returns {IAlertify}
     */
    prompt (defaultvalue, promptMessage, successFn, cancelFn) {
        return alert(defaultvalue);
        // return alertify
        //     .defaultValue(defaultvalue)
        //     .prompt(promptMessage, successFn, cancelFn)
    }
    /**
     * Validate email before save and import
     * @param emailToValidate
     * @returns {boolean}
     */
    validateEmail (emailToValidate) {
        return 1;
        // return angular.isObject(emailToValidate) &&
        //     emailToValidate.hasOwnProperty('name') &&
        //     angular.isArray(emailToValidate.elements) &&
        //     angular.isString(emailToValidate.html) &&
        //     angular.isObject(emailToValidate.emailSettings) &&
        //     emailToValidate.emailSettings.type == 'emailSettings' &&
        //     angular.isObject(emailToValidate.emailSettings.options)
    }
    /**
     * Track events with Google Analytics
     * @param category
     * @param event
     * @param name
     * @returns {*}
     */
    trackEvent (category, event, name) {
        if ( this.variables.trackEvents) {
            return 1;
            // if (!window.ga)
            //     return console.error('To track events, include Google analytics code in index.html');
            // return ga('send', 'event', category, event, name);
        }
    }
    removeLineBreaks(html) {
        return html.replace(/\n\s*\n/gi, '\n');
    }
}
