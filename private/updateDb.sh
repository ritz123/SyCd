#!/bin/bash
# to export the mangodb and store in a json file
COLLECTION=pdb
TOP=$(dirname $0)/..
OUT_FILE=$TOP/server/startup/sample_db.js
echo "created $OUT_FILE"
echo "samplePdb = " > $OUT_FILE
mongoexport -h localhost --port 3001 -d meteor -c ${COLLECTION} |  python -m json.tool  >> $OUT_FILE
echo ";" >> $OUT_FILE
