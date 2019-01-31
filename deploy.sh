#!/bin/bash
# build docker image
gcloud builds submit --tag gcr.io/<project-id>/docker-image . --project <project-id>
# restart instances (this loads new images)
gcloud beta compute instance-groups managed rolling-action restart gcloud-docker-node-group --zone us-east1-b --project <project-id>
