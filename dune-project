(lang dune 3.8)

(name shuko)

(version 0.1)

(license "ISC")

(generate_opam_files true)

(using melange 0.1)

(authors "steenuil <steen@neets.work>")

(maintainers "steenuil <steen@neets.work>")

(source
 (github steinuil/shuko))

(package
 (allow_empty)
 (name shuko)
 (synopsis "WEBIRC client")
 (description
  "WEBIRC client")
 (depends
  (melange (= 4.0.1-52))))
