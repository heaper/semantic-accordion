semantic-accordion
==================

jQuery plugin that applies an accordion interface to semantic markup.

##Markup
```
<div class="beer">    			
	<section id="stout">
		<h3>Stout</h3>
		<p>Description 1</p>
	</section>
 	<section id="ipa">
  		<h3>IPA</h3>
		<p>Description 2</p>
	</section>
  	<section id="porter">
  		<h3>Porter</h3>
		<p>Description 3</p>
	</section>
</div>
```
##Usage
```
$(".beer").accordion();
```
### header=h3
The jQuery selector used to target the elements that will be used to create the tab names.
### panel=section
The jquery selector used to target the elements that will comprise the accordion panels.
### content=p
The jQuery selector used to target the elements within a panel that should be displayed when that panel is active.
### destroy=false
A value of true will completely remove all generated markup and event listeners associated with the plugin.
