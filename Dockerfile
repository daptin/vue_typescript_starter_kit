FROM daptin/daptin:latest
COPY ./dist /site
COPY ./data/initial.json /data/initial.json
ADD schema_modals_daptin.yaml /opt/daptin/schema_modals_daptin.yaml
ENTRYPOINT ["/opt/daptin/daptin"]
