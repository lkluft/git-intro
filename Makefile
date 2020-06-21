HTML_FILES = intro.html remote.html collaboration.html configuration.html

html: $(HTML_FILES)

%.html: %.tmpl templates/ src/
	python3 scripts/template2html $<

clean:
	rm $(HTML_FILES)
