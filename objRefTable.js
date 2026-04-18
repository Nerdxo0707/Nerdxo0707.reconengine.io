const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.HTMLElement,
		C3.Plugins.progressbar,
		C3.Plugins.iframe,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.progressbar.Acts.AddInstanceVar,
		C3.Plugins.progressbar.Acts.SetProgress,
		C3.Plugins.progressbar.Cnds.CompareProgress,
		C3.Plugins.System.Acts.NextPrevLayout
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Text: 0},
	{Button: 0},
	{HTMLElement: 0},
	{ProgressLoad: 0},
	{ProgressBar: 0},
	{iframe: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Text: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	HTMLElement: class extends self.IHTMLElementInstance {},
	ProgressBar: class extends self.IProgressBarInstance {},
	iframe: class extends self.IIframeInstance {}
}