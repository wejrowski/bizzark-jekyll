var so = new SWFObject("/bizzark_3d.swf", "movieID", "100%", "100%", "9");
so.addVariable("flashVarText", "this is passed in via FlashVars for example only");
so.addParam("scale", "noscale");
so.addParam('allowScriptAccess', 'always');
so.addParam('wmode', 'transparent');
so.write("bg");