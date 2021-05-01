step=1

mock-server:
	cd projects/mock-server; npm install; npm run start

codegen:
	cd projects/mock-server; npm install; npm run codegen

client:
	cd projects/step${step}/client; npm install; npm run start

client-extra:
	cd projects/extra${extra}/client; npm install; npm run start