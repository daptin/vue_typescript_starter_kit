FROM daptin/daptin:latest
COPY ./dist /site
COPY ./data/initial.json /data/initial.json
ADD schema_import_data_daptin.yaml /opt/daptin/schema_import_data_daptin.yaml
ADD schema_modals_daptin.yaml /opt/daptin/schema_modals_daptin.yaml
ENTRYPOINT ["/opt/daptin/daptin"]
