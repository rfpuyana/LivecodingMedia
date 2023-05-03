

s0.initImage(atom.project.getPaths()[0]+'/mayo-2023/angelalinda.jpg')
s1.initImage(atom.project.getPaths()[0]+'/mayo-2023/angelamama.gif')
s2.initImage(atom.project.getPaths()[0]+'/mayo-2023/muro.jpg')
s3.initImage(atom.project.getPaths()[0]+'/mayo-2023/ovalo-angela.jpg')



src(s0).scale(1,.9)
  .brightness([-1,0].smooth().fast(.5))
  .invert([0,1].smooth().fast(.5))
.out()


src(s0).scale(1,.9)
//.modulate(osc(1,.5))
.modulate(src(s3).invert([0,1].smooth()).scale(2),.1)
.out()


hush()



s0.initImage(atom.project.getPaths()[0]+'/mayo-2023/angelalinda.jpg')
s1.initImage(atom.project.getPaths()[0]+'/mayo-2023/angelamama.gif')
s2.initImage(atom.project.getPaths()[0]+'/mayo-2023/muro.jpg')
s3.initImage(atom.project.getPaths()[0]+'/mayo-2023/ovalo-angela.jpg')
