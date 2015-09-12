#!/bin/bash
MONGOPATH=/home/biplab/Software/mongoDB/mongodb-linux-i686-2.6.5
COLLECTION=pdb
TOP=$(dirname $0)/..
OUT_FILE=$TOP/server/startup/sample_db.js
echo "created $OUT_FILE"
echo "samplePdb = " > $OUT_FILE
${MONGOPATH}/bin/mongoexport -h localhost --port 3001 -d meteor -c ${COLLECTION} | ~/bin/cat.json >> $OUT_FILE
echo ";" >> $OUT_FILE
